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

import hide from "../../assets/hide.png";
import del from "../../assets/del.png";
import { Button } from "@mui/material";

const AddAdmin = () => {
  const [open, setOpen] = useState(false);
  const [delOpen, setDelOpen] = useState(false);
  return (
    <Flex
      color="white"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      ml="2rem"
      w="80%"
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
                label="Standard"
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
              <TextField
                sx={{ width: "80%", margin: "1rem", color: "white" }}
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </ModalBody>

            <ModalFooter>
              <Button variant="contained" sx={{ backgroundColor: "#FF3B81" }}>
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
      <Box backgroundColor="#22262E" p="2rem">
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
