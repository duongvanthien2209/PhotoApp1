import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { FastField, Form, Formik } from 'formik';

// eslint-disable-next-line import/no-unresolved
import Images from 'constaints/images';
// eslint-disable-next-line import/no-unresolved
import { PHOTO_CATEGORY_OPTIONS } from 'constaints/global';

import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

const PhotoForm = () => {
  const initialValues = {
    title: '',
    categoryId: null,
  };

  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        // Do something
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

            <FormGroup>
              <Label>Photo</Label>
              <div>
                <Button type="button" outline color="primary">
                  Random a photo
                </Button>
              </div>
              <div>
                <img
                  width="200px"
                  height="200px"
                  src={Images.COLOR_BG}
                  alt="colorful"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PhotoForm;
