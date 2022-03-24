import React,{useState} from "react";
import { Flex, Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import login from "../../assets/login.png";
import TextField from "@mui/material/TextField";
import { Button,styled ,InputAdornment} from "@mui/material";
import Lottie from "react-lottie";
import cityLottie from "../../assets/lotties/cityLottie.json";
import {Icon} from '@iconify/react';


const CustomTextField = styled(TextField)(()=>({
  width: "80%", 
  margin: "1rem", 
  color:'#cacaca',
  '& .MuiInputLabel-root':{
    color:'#cacaca',
  },
  '& .MuiInput-input':{
    color:'#cacaca',

  },
  '& label.Mui-focused': {
    color: '#cacaca',
  },
  "& .MuiInput-root:before": {
    borderBottom: "1px solid #cacaca",
  },
  "& .MuiInput-root:after": {
    borderBottom: "2px solid #cacaca",
  },
}))

const Login = () => {
  const [data,setData] = useState({
    email:"",
    password:"",
  })
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cityLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(data);
  }

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
          justify="center"
          alignItems="center"

          w="60%"
          p="6rem 2rem"
          borderRadius="10px"
          border="1px solid #ADB9C8"
          backgroundColor="#22262E"
        >
          <Text fontSize="2.5rem" fontWeight="800" color="#FF3B81">
            Login
          </Text>
          <CustomTextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            onChange={handleChange}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <Icon icon="carbon:email" color="#cacaca" fontSize="1.2em" />
            //     </InputAdornment>
            //   ),
            // }}
          />
          <CustomTextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <Button
            sx={{
              backgroundColor: "#FF3B81",
              padding: "0.5rem 1rem",
              fontSize: "1.2rem",
              width: "80%",
              borderRadius:"10px",
              marginTop: "1rem",
              '&:hover':{
                backgroundColor: "#FF3B81",
              }
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
