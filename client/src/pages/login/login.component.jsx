import React from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import login from "../../assets/login.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Lottie from "react-lottie";
import cityLottie from "../../assets/lotties/cityLottie.json";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cityLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="#1C2028"
      w="100%"
      h="100vh"
    >
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        w="50%"
        h="100vh"
      >
        <Lottie options={defaultOptions} width={400} height={450} />
      </Flex>
      <Flex
        justify="center"
        alignItems="center"
        w={{ base: "100%", md: "50%" }}
        h="100vh"
      >
        <Flex
          h="50vh"
          flexDirection="column"
          // justify="center"
          justifyContent ="start"
          alignItems="center"

          w="60%"
          p="6rem 2rem"
          borderRadius="10px"
          border="1px solid #ADB9C8"
          backgroundColor="#22262E"
        >
          <Text fontSize="3rem" fontWeight="800" color="#FF3B81">
            Login
          </Text>
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
          <Button
            sx={{
              backgroundColor: "#FF3B81",
              padding: "0.5rem 1rem",
              fontSize: "1.2rem",
              width: "60%",
              marginTop: "1rem",
            }}
            variant="contained"
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
