import React from "react";
import { Flex, Text, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import CrimeScreenshot from '../../assets/CrimeScreenshot.png';
import CrimeLocation from '../../assets/CrimeLocation.png';

const Crimes = [
    {
        screenshot: "../../assets/CrimeScreenshot.png",
        location: "VIT Pune, Bibwewadi, camera id- 1C2",
        crimeType: "Gun detected",
        date: "23/3/2022",
        time: "8:00am"
    },
    {
        screenshot: "../../assets/CrimeScreenshot.png",
        location: "VIT Pune, Bibwewadi, camera id- 1C2",
        crimeType: "Gun detected",
        date: "23/3/2022",
        time: "8:00am"
    },
    {
        screenshot: "../../assets/CrimeScreenshot.png",
        location: "VIT Pune, Bibwewadi, camera id- 1C2",
        crimeType: "Gun detected",
        date: "23/3/2022",
        time: "8:00am"
    },
    {
        screenshot: "../../assets/CrimeScreenshot.png",
        location: "VIT Pune, Bibwewadi, camera id- 1C2",
        crimeType: "Gun detected",
        date: "23/3/2022",
        time: "8:00am"
    }
]

const AddAdmin = () => {
    const renderCrimes = (location, type, date, time, idx) => {
        return (
            <Box mb={10} backgroundColor="#22262E" p="2rem" width="100%" borderRadius={7} id={idx}>
                <Flex   alignItems="center">
                    <Box>
                        <Image src={CrimeScreenshot} alt="crime screenshot"/>
                    </Box>
                    <Flex marginLeft="1rem" flexDirection="column" textAlign="left" justifyContent="space-between" width="100%" height="100%" >
                        <Text marginY="0.5rem" fontSize="1.3rem" letterSpacing="0.1rem">{Crimes[0].location}</Text>
                        <Text marginY="0.5rem" fontSize="1.3rem" letterSpacing="0.1rem">Crime type: {Crimes[0].crimeType}</Text>
                        <Text marginY="0.5rem" fontSize="1.3rem" letterSpacing="0.1rem">Date: {Crimes[0].date}</Text>
                        <Text marginY="0.5rem" fontSize="1.3rem" letterSpacing="0.1rem">Time: {Crimes[0].time}</Text>
                    </Flex>
                    <Flex flexDirection="column-reverse" height="11rem" alignContent="flex-start">
                        <Image src={CrimeLocation} alt="crime location" cursor="pointer"/>
                    </Flex>
                </Flex>
            </Box>
        )
    }
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
        <Text fontWeight="800" color="#FF3B81" fontSize="3rem">
            Crime History
        </Text>
        {Crimes.map((crime, idx) => {
            return renderCrimes(crime.location, crime.crimeType, crime.date, crime.time, idx)
        })}
        </Flex>
    );
};

export default AddAdmin;
