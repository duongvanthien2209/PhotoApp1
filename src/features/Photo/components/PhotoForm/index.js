import React from 'react';
import {
  Button, Form, FormGroup, Input, Label,
} from 'reactstrap';
import Select from 'react-select';

// eslint-disable-next-line import/no-unresolved
import Images from 'constaints/images';
// eslint-disable-next-line import/no-unresolved
import { PHOTO_CATEGORY_OPTIONS } from 'constaints/global';

const PhotoForm = () => (
  <Form>
    <FormGroup>
      <Label for="titleId">Title</Label>
      <Input type="text" id="titleId" />
    </FormGroup>

    <FormGroup>
      <Label for="categoryId">Category</Label>
      <Select
        name="categoryId"
        id="categoryId"
        options={PHOTO_CATEGORY_OPTIONS}
      />
    </FormGroup>

    <FormGroup>
      <Label>Photo</Label>
      <div>
        <Button type="button" outline color="primary">
          Random a photo
        </Button>
      </div>
      <div>
        <img width="200px" height="200px" src={Images.COLOR_BG} alt="colorful" />
      </div>
    </FormGroup>

    <FormGroup>
      <Button color="primary">Add to album</Button>
    </FormGroup>
  </Form>
);

export default PhotoForm;
