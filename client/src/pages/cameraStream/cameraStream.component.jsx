import React from "react";
import {Text,Flex} from '@chakra-ui/react';


const CameraStream = () => {
  return (
    <Flex direction="column" width="100%" align="start">
      <Text color="#FF3B81" fontWeight={800} fontSize="2em" mb="30px">
        CAMERA 123
        <video />
      </Text>
    </Flex>
  );
};

export default CameraStream;
