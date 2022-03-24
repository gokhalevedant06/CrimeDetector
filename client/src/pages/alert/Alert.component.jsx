import React from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import CrimeScreenshot from "../../assets/CrimeScreenshot.png";
import CrimeLocation from "../../assets/CrimeLocationBig.png";
import { Button } from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";

const Crimes = [
  {
    screenshot: "../../assets/CrimeScreenshot.png",
    location: "VIT Pune, Bibwewadi, camera id- 1C2",
    crimeType: "Gun detected",
    date: "23/3/2022",
    time: "8:00am",
  },
  {
    screenshot: "../../assets/CrimeScreenshot.png",
    location: "VIT Pune, Bibwewadi, camera id- 1C2",
    crimeType: "Gun detected",
    date: "23/3/2022",
    time: "8:00am",
  },
  {
    screenshot: "../../assets/CrimeScreenshot.png",
    location: "VIT Pune, Bibwewadi, camera id- 1C2",
    crimeType: "Gun detected",
    date: "23/3/2022",
    time: "8:00am",
  },
  {
    screenshot: "../../assets/CrimeScreenshot.png",
    location: "VIT Pune, Bibwewadi, camera id- 1C2",
    crimeType: "Gun detected",
    date: "23/3/2022",
    time: "8:00am",
  },
];

const Alert = () => {
  const renderAlert = (location, type, date, time, idx) => {
    // const screenshot = new Image();
    // const ssHeight = screenshot.height;
    // const ssWidth = screenshot.width;
    return (
      <Box
        mb={10}
        backgroundColor="#22262E"
        p="2rem"
        width="90%"
        borderRadius={7}
        id={idx}
      >
        <Flex alignItems="center" height="100%">
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            alignItems="start"
            height="30rem"
          >
            <Image src={CrimeScreenshot} alt="crime screenshot" />
            <p>{location}</p>
            <p>Crime type: {type}</p>
            <Button
              variant="solid"
              bgColor="#D32F2F"
              _hover={{ backgroundColor: "#D75B5B" }}
              rightIcon={<WarningTwoIcon />}
              iconSpacing={3}
              margin="0rem 1rem 0rem 0rem "
            >
              Alert Authorities
            </Button>
          </Flex>
          <Flex flexDirection="column" ml={90} height="30rem">
            <Image
              src={CrimeLocation}
              mt={4}
              alt="crime location"
              height="16rem"
              width="20rem"
            />
          </Flex>
        </Flex>
      </Box>
    );
  };
  const crime = Crimes[0];
  return (
    <Flex
      color="white"
      justifyContent="flex-start"
      alignItems="flex-start"
      flexDirection="column"
      ml="2rem"
      w="100%"
      h="100%"
      mt="2rem"
    >
      <Text fontWeight="800" color="#FF3B81" fontSize="3rem">
        Alert
      </Text>
      {renderAlert(crime.location, crime.crimeType, crime.date, crime.time)}
    </Flex>
  );
};

export default Alert;
