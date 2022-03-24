import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Switch,
} from "@chakra-ui/react";
import { Button, IconButton, styled } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import AddCameraModal from "./AddCameraModal";
import { useNavigate } from "react-router-dom";

const MainPage = styled("div")(() => ({
  width: "100%",
  height: "100%",
  "& .chakra-switch__track": {
    backgroundColor: "#161B22 !important",
  },
  "& .chakra-switch__thumb": {
    backgroundColor: "#FF3B81",
  },
}));

const CameraOverview = ({ camera }) => {
  const navigate = useNavigate();
  return (
    <Tr color="#cacaca">
      <Td>123c</Td>
      <Td>VIT Pune, Bibwewadi</Td>
      <Td>
        <Switch id="tracking switch" _focus={{ outline: "none" }} />
      </Td>
      <Td>
        <Button
          sx={{ color: "#FF3B81", borderRadius: "5px", padding: "5px 10px" }}
          endIcon={<Icon icon="fluent:live-20-filled" />}
          onClick={() => {
            navigate("/cameras/2");
          }}
        >
          STREAM
        </Button>
      </Td>
      <Td>
        <IconButton>
          <Icon
            icon="fluent:delete-20-regular"
            fontSize="1.2em"
            color="#cacaca"
          />
        </IconButton>
      </Td>
    </Tr>
  );
};

const Cameras = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  return (
    <MainPage>
      <Flex direction="column" width="100%" align="start">
        <Text color="#FF3B81" fontWeight={800} fontSize="2em" mb="30px">
          CAMERAS
        </Text>
        <Box
          width="90%"
          backgroundColor="#22262E"
          display="flex"
          flexDirection="column"
          alignItems="start"
        >
          <Table variant="striped" colorScheme="blackAlpha">
            <Thead>
              <Th>Camera ID</Th>
              <Th>Location</Th>
              <Th>Tracking</Th>
              <Th></Th>
              <Th></Th>
            </Thead>
            <Tbody>
              {[...Array(5)].map((item, idx) => (
                <CameraOverview />
              ))}
            </Tbody>
          </Table>
          <AddCameraModal state={showAddModal} toggleModal={toggleAddModal} />

          <Flex
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="end"
          >
            <Button
              sx={{
                margin: "30px 0 15px 10px",
                backgroundColor: "#FF3B81",
                color: "#fff",
                padding: "5px 20px",
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#FF3B81",
                },
              }}
              onClick={toggleAddModal}
            >
              CONNECT NEW CAMERA
            </Button>
            <Text color="#FF3B81" margin="0 15px 10px 0" fontWeight={400}>5 cameras</Text>
          </Flex>
        </Box>
      </Flex>
    </MainPage>
  );
};

export default Cameras;
