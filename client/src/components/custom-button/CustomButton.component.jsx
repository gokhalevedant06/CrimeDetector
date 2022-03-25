import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
      
        backgroundColor: "#FF3B81",
        color: "#fff",
        padding: "5px 20px",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#FF3B81",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
