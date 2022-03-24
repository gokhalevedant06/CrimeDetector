import React, { useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import TextField from "@mui/material/TextField";
import dang from "../../assets/dang.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import hide from "../../assets/hide.png";
import del from "../../assets/del.png";
import { Button } from "@mui/material";
// import { addAdminHandler } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";

const AddAdmin = () => {
  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: null,
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setOpen(false);
    // addAdminHandler(data, dispatch, navigate);
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
            <ModalBody>
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Name"
                name="name"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Phone Number"
                name="phone"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Email"
                name="email"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Password"
                name="password"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
                type="password"
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Comfirm Password"
                name="cpassword"
                variant="standard"
                onChange={(e) => onChangeHandler(e)}
                type="password"
              />
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={(e) => onSubmitHandler(e)}
                variant="contained"
                sx={{ backgroundColor: "#FF3B81" }}
              >
                Create Admin
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
      {/*<---------delete modal--------->*/}
      <Modal isCentered isOpen={delOpen} onClose={() => setDelOpen(false)}>
        <ModalOverlay />
        <ModalContent backgroundColor="#22262E">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <ModalHeader textAlign="center" color="#FF3B81">
              <Image src={dang}></Image>
            </ModalHeader>
            <ModalCloseButton color="#FF3B81" />
            <ModalBody color="white">
              <Text fontSize="1.4rem">
                Do you really want to delete this Admin?
              </Text>
            </ModalBody>

            <ModalFooter>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ffdce8", color: "black" }}
                onClick={() => setDelOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ec0053", marginLeft: "1rem" }}
              >
                Delete
              </Button>
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
            <Tr>
              <Td>1</Td>
              <Td>Admin Number One</Td>
              <Td>admin1@gmai.com</Td>
              <Td>**********</Td>
              <Td>
                <Image src={hide}></Image>
              </Td>
              <Td>
                <Image
                  cursor="pointer"
                  onClick={() => setDelOpen(!delOpen)}
                  src={del}
                ></Image>
              </Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Admin Number One</Td>
              <Td>admin1@gmai.com</Td>
              <Td>**********</Td>
              <Td>
                <Image src={hide}></Image>
              </Td>
              <Td>
                <Image
                  cursor="pointer"
                  onClick={() => setDelOpen(!delOpen)}
                  src={del}
                ></Image>
              </Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Admin Number One</Td>
              <Td>admin1@gmai.com</Td>
              <Td>**********</Td>
              <Td>
                <Image src={hide}></Image>
              </Td>
              <Td>
                <Image
                  cursor="pointer"
                  onClick={() => setDelOpen(!delOpen)}
                  src={del}
                ></Image>
              </Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Admin Number One</Td>
              <Td>admin1@gmai.com</Td>
              <Td>**********</Td>
              <Td>
                <Image src={hide}></Image>
              </Td>
              <Td>
                <Image
                  cursor="pointer"
                  onClick={() => setDelOpen(!delOpen)}
                  src={del}
                ></Image>
              </Td>
            </Tr>

            <Tr>
              <Td>1</Td>
              <Td>Admin Number One</Td>
              <Td>admin1@gmai.com</Td>
              <Td>**********</Td>
              <Td>
                <Image src={hide}></Image>
              </Td>
              <Td>
                <Image
                  cursor="pointer"
                  onClick={() => setDelOpen(!delOpen)}
                  src={del}
                ></Image>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <Flex mt="2rem" justifyContent="space-between" alignItems="center">
          <Button
            onClick={() => setOpen(!open)}
            variant="contained"
            sx={{ backgroundColor: "#FF3B81" }}
          >
            Create new Admin
          </Button>
          <Box>4 Admins</Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AddAdmin;
