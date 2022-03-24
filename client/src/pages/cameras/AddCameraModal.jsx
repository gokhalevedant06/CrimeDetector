import { Button, Modal, styled, TextField } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { Box, Flex, Text } from "@chakra-ui/react";

const CameraModelContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "75vh",
  backgroundColor: "#22262E",
  borderRadius: "5px",
  boxShadow: "0px 7.71233px 19.2808px rgba(35, 35, 35, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "30px 15px 15px 15px ",
  outline: "none",
  "& .close-icon": {
    position: "absolute",
    top: 5,
    right: 5,
    cursor: "pointer",
  },
  '& .con::-webkit-scrollbar':{
      display:'none'
  }
}));

const CustomTextField = styled(TextField)({
  width: "90%",
  marginBottom: "30px",

  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "5px",

    "& fieldset": {
      borderColor: "#ADB9C8",
    },
    "&:hover fieldset": {
      borderColor: "#ADB9C8",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ADB9C8",
    },
  },
  "& input": {
    padding: "10px 20px",
    color: "#ADB9C8",
    textAlign: "center",
  },
});

const CameraPreview = ({ camera }) => {
  return (
    <Flex
      direction="row"
      width="90%"
      margin="7px auto"
      backgroundColor="#1C2028"
      alignItems="center"
      justify="space-between"
      padding="5px 10px"
      borderRadius="5px"
      color="#cacaca"
    >
      <Text>Camera 123c</Text>
      <Button sx={{ color: "#FF3B81" }}>CONNECT</Button>
    </Flex>
  );
};

const AddCameraModal = ({ state, toggleModal }) => {
  return (
    <Modal open={state} onClose={toggleModal}>
      <CameraModelContainer>
        <Icon
          icon="carbon:close"
          className="close-icon"
          fontSize="1.5em"
          color="#5c6270"
          onClick={toggleModal}
        />
        <CustomTextField variant="outlined" placeholder="Search cameras" />
        <Box flex="1" w="100%" overflowY="scroll" className="con" >
          {[...Array(10)].map((item) => (
            <CameraPreview />
          ))}
        </Box>
      </CameraModelContainer>
    </Modal>
  );
};

export default AddCameraModal;
