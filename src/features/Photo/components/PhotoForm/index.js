import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
import { FastField, Form, Formik } from 'formik';
import * as yup from 'yup';

// eslint-disable-next-line import/no-unresolved
import { PHOTO_CATEGORY_OPTIONS } from 'constaints/global';

import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

const PhotoForm = (props) => {
  const { initialValues, onSubmit, isAddMode } = props;

  const validationSchema = yup.object().shape({
    title: yup.string().required('This field is required'),
    categoryId: yup.number().required('This field is required').nullable(),
    photo: yup.string().when('categoryId', { is: 1, then: yup.string().required('This field is required'), otherwise: yup.string().notRequired() }),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        // Do something
        const { values, errors, touched, isSubmitting } = formikProps;
        // console.log({ values, errors, touched });

        return (
          <Form>
            <FastField // Dùng cho những field độc lâp với các field khác, khi các field khác thay đổi nó ko bị rerender lại
              name="title"
              component={InputField}
              label="Title"
              placeholder="Example..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="Select Example..."
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color={ isAddMode ? 'primary' : 'success' }>
                { isSubmitting && <Spinner size="sm" /> }
                { isAddMode ? 'Add to album' : 'Update photo' }
                </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
