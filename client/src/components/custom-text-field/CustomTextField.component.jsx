import React from 'react';
import {styled,TextField} from '@mui/material';

const CustomTextFieldComponent = styled(TextField)(() => ({
    width: "80%",
    margin: "1rem",
    color: "#cacaca",
    "& .MuiInputLabel-root": {
      color: "#cacaca",
    },
    "& .MuiInput-input": {
      color: "#cacaca",
    },
    "& label.Mui-focused": {
      color: "#cacaca",
    },
    "& .MuiInput-root:before": {
      borderBottom: "1px solid #cacaca",
    },
    "& .MuiInput-root:after": {
      borderBottom: "2px solid #cacaca",
    },
  }));

const CustomTextField = ({...props}) => {
  return (
    <CustomTextFieldComponent {...props} />
  )
}

export default CustomTextField