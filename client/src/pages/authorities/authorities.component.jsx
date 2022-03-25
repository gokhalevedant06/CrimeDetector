import { Box, Flex, Text } from "@chakra-ui/react";
import { Checkbox } from "@mui/material";
import React from "react";
import CustomButton from "../../components/custom-button/CustomButton.component";

import useAdmins from "../../hooks/useAdmins";

const authorities = [
  {
    name: "Shivam Gavandi",
    phone: "+919136302456",
  },
  {
    name: "Aryan Sinde",
    phone: "+919326272427",
  },
  {
    name:"Vedant Gokhale",
    phone:"+919552037743"
  }
];

const AuthorityOverview = ({ authority }) => {
  return (
    <Flex
      direction="row"
      color="#cacaca"
      alignItems="center"
      backgroundColor="#22262E"
      width="50%"
      margin="10px 0px"
      justify="space-between"
      padding="10px 30px 10px 15px"
      borderRadius="5px"
    >
      {/* <Checkbox /> */}
      <Text>{authority.name}</Text>
      <Text>{authority.phone}</Text>
    </Flex>
  );
};

const Authorities = () => {
  const { alertAuthorities } = useAdmins();

  const handleClick = () => {
    alertAuthorities(authorities);
  };

  return (
    <Flex direction="column" width="100%" align="start">
      <Text color="#FF3B81" fontWeight={800} fontSize="2em" mb="30px">
        AUTHORITIES
      </Text>
      <Flex direction="column" width="80%" margin="0 0 30px 0">
        {authorities.map((authority) => (
          <AuthorityOverview authority={authority} />
        ))}
      </Flex>
      <CustomButton onClick={handleClick}>ALERT</CustomButton>
    </Flex>
  );
};

export default Authorities;
