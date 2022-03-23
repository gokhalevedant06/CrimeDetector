import { styled, Drawer, Button } from "@mui/material";

export const SidebarContainer = styled("div")(() => ({
  width: "fit-content",
  height: "fit-content",
  position: "fixed",
}));

export const SidebarDrawer = styled(Drawer)(({ theme }) => ({
  backgroundColor: "transparent",
  height: "90vh",
  width: "fit-content",

  "& .MuiBackdrop-root": {
    background: "none",
    backgroundColor: "transparent",
    filter: "brightness(80%)",
    width: "fit-content",
  },

  "& .MuiPaper-root": {
    height: "96vh",
    width: "20vw",
    margin: "2vh 0 2vh 20px",
    backgroundColor: "#22262E",
    overflowX: "hidden",
    borderRadius: 10,
    boxShadow: "0px 7.71233px 19.2808px rgba(35, 35, 35, 0.1)",
  },
}));

export const MainSidebar = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  padding: "10px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  "& .close-icon": {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "2em",
    color: "#FF3B81",
    cursor: "pointer",
  },

  "& .MuiAvatar-root ": {
    width: "180px",
    height: "180px",
    marginTop: "20px",
  },

  "& .sidebar-btns": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop:80,
  },

  "& .user-info": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& .username": {
      fontSize: "1.4em",
      fontWeight: 500,
      color: "black",
    },
  },
}));

export const SidebarBtnContainer = styled(Button)(({ theme, selected }) => ({
  width: "80%",
  height: "fit-content",
  // ...theme.palette.textGradients.txtGrad1,
  borderRadius: 5,
  margin: "20px 0",
  fontSize: "1.2em",
  padding: "3px",
  // fontWeight: selected?800:400,
  letterSpacing: 2,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "start",
  "& svg": {
    margin: "0 10px 0 30px",
    fontSize: "1.2em",
    color:selected?'#22262E !important':"red",
    // transform:selected?'scale(1.2)':'none',
  },
  backgroundColor:selected?'#FF3B81':'',
  color:selected?'#22262E':'#FF3B81',

  '&:hover':{
    backgroundColor:selected?'#FF3B81':'',
    color:selected?'#22262E':'#FF3B81',
  }
  // backgroundClip:selected?'none':'text',
  // textFillColor:selected?'white':'transparent',

}));

export const LogoutBtn = styled(Button)(({ theme }) => ({
  width: "70%",
  height: "fit-content",
  boxShadow: "0px 7.71233px 19.2808px rgba(35, 35, 35, 0.1)",
  backgroundColor: "white",
  padding: "10px",
  fontWeight: 600,
  letterSpacing: 2,
  backgroundColor:'#22262E',
  border:'1px solid #FF3B81',
  color: '#FF3B81',

  // ...theme.palette.textGradients.txtGrad1,
  "& svg": {
    marginRight: 10,
  },
}));
