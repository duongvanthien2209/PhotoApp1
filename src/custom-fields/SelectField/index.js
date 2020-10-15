/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

const InputField = (props) => {
  const {
    field, options, label, placeholder, disabled,
  } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);

  // eslint-disable-next-line no-shadow
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        options={options}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormGroup>
  );
};

InputField.propTypes = {
  // Custom field phải có field và form
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  options: PropTypes.array,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  options: [],
  label: '',
  placeholder: '',
  disabled: false,
};

export default InputField;
