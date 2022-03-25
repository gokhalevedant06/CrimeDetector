import React, { useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Table, Thead, Tbody, Th } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";

import CustomTextField from "../../components/custom-text-field/CustomTextField.component";
import CustomButton from "../../components/custom-button/CustomButton.component";
import AdminOverview from "./adminOverview.component";

const AddAdmin = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: null,
    password: "",
    cpassword: "",
  });

  const { registerAdmin, user } = useAuth();

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    const d = await registerAdmin(data);
    if (d) {
      setOpen(false);
    }
  };
  return (
    <Flex
      color="white"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      ml="2rem"
      w="100%"
      h="100vh"
      mt="2rem"
    >
      <Modal isCentered isOpen={open} onClose={() => setOpen(false)}>
        <ModalOverlay />
        <ModalContent backgroundColor="#22262E">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <ModalHeader textAlign="center" color="#FF3B81">
              CREATE NEW ADMIN
            </ModalHeader>
            <ModalCloseButton color="#FF3B81" />
            <ModalBody
              display="flex"
              w="100%"
              flexDirection="column"
              alignItems="center"
            >
              <CustomTextField
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <CustomTextField
                id="standard-basic"
                label="Phone Number"
                name="phone"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <CustomTextField
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <CustomTextField
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
                type="password"
              />
              <CustomTextField
                id="standard-basic"
                label="Comfirm Password"
                name="cpassword"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
                type="password"
              />
            </ModalBody>

            <ModalFooter>
              <CustomButton onClick={(e) => onSubmitHandler(e)}>
                Create Admin
              </CustomButton>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>

      <Text fontWeight="800" color="#FF3B81" fontSize="3rem">
        Admins
      </Text>
      <Box backgroundColor="#22262E" p="2rem" width="90%">
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead fontWeight="400" fontSize="1.8rem">
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Password</Th>
            <Th> </Th>
            <Th> </Th>
          </Thead>
          <Tbody>
            {user.admins.map(({ admin, password }, idx) => (
              <AdminOverview admin={admin} password={password} key={idx} />
            ))}
          </Tbody>
        </Table>
        <Flex mt="2rem" justifyContent="space-between" alignItems="center">
          <CustomButton onClick={() => setOpen(!open)}>
            CREATE NEW ADMIN
          </CustomButton>
          <Box>{user?.admins.length} Admins</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AddAdmin;
