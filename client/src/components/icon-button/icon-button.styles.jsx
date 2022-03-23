import {Button,styled} from '@mui/material';

export const IconButtonContainer = styled(Button)(()=>({
    width:'50px',
    height:'50px',
    backgroundColor:"#1C2028",
    // boxShadow:"r",
    color:'#FF3B81',
    margin:'5px 20px',

    '&:hover':{
      backgroundColor:"#1C2028",
    }

  }))
  