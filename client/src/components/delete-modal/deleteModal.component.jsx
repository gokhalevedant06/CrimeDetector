import { Modal, styled, Button } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import { Flex } from "@chakra-ui/react";

const DeleteModalContainer = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "fit-content",
  backgroundColor: "#22262E",
  outline: "none",
  borderRadius: 7.71,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#cacaca",

  padding: "15px 25px",

  "& .main-text": {
    fontSize: "1.8em",
    textAlign: "center",
    margin: "10px 0px",
  },
  "& .MuiButton-root": {
    width: "47%",
    borderRadius: 5,
    color: "#22262E",
  },
  "& .no-btn": {
    backgroundColor: "#009688",
    "&:hover": {
      backgroundColor: "#009688",
    },
  },
  "& .yes-btn": {
    backgroundColor: "#D32F2F",
    "&:hover": {
      backgroundColor: "#D32F2F",
    },
  },
}));

const DeleteModal = ({ state, toggleModal, onYes, onNo }) => {
  return (
    <Modal open={state} onClose={toggleModal}>
      <DeleteModalContainer>
        <Icon
          icon="akar-icons:triangle-alert-fill"
          color="#cacaca"
          fontSize="7em"
        />
        <div className="main-text">Do you really want to delete this?</div>
        <Flex
          width="100%"
          direction="row"
          margin="10px 0px"
          justify="space-between"
        >
          <Button className="no-btn" onClick={onNo}>
            CANCEL
          </Button>
          <Button className="yes-btn" onClick={onYes}>
            DELETE
          </Button>
        </Flex>
      </DeleteModalContainer>
    </Modal>
  );
};

export default DeleteModal;
