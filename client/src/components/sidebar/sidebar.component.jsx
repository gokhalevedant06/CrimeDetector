import React, { useState } from "react";

//components
import IconButton from "../icon-button/icon-button.component";

//libs
import { Icon } from "@iconify/react";
import { Avatar, useTheme, Rating, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// import useAuth from "../../hooks/useAuth";
//styled
import {
  SidebarContainer,
  SidebarDrawer,
  MainSidebar,
  SidebarBtnContainer,
  LogoutBtn,
} from "./sidebar.styles";

const SidebarBtn = ({ url, children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarBtnContainer
      selected={pathname === url}
      onClick={() => {
        navigate(url);
      }}
    >
      {children}
    </SidebarBtnContainer>
  );
};

const Sidebar = ({ toggleScreenState }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();

  const { user } = useSelector((state) => state.auth);

  // const { logout } = useAuth();

  // const [user, setUser] = useState({
  //   profilePic: "https://www.nawpic.com/media/2020/levi-ackerman-nawpic-38.jpg",
  //   username: "Levi_2910",
  // });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    toggleScreenState();
  };

  const handleLogout = () => {
    //logout
  };

  return (
    <SidebarContainer theme={theme}>
      <IconButton onClick={toggleSidebar}>
        <Icon
          icon="ci:menu-alt-03"
          fontSize={"2em"}
        />
      </IconButton>
      <SidebarDrawer
        disableEnforceFocus
        open={isSidebarOpen}
        anchor="left"
        onOpen={toggleSidebar}
      >
        <MainSidebar>
          <Icon
            icon="eva:close-circle-outline"
            className="close-icon"
            onClick={toggleSidebar}
          />
          {/* <div className="user-info">
            <Avatar src="" />
            <div className="username">username</div>
            <Rating
              name="read-only"
              value={user?.rating || 0}
              readOnly
              size="large"
            />
          </div> */}  
          <div className="sidebar-btns">
            <SidebarBtn url="/">
              <Icon
                icon="fluent:broad-activity-feed-16-regular"
                color="#FF3B81"
              />{" "}
              DASHBOARD
            </SidebarBtn>
            <SidebarBtn url="/explore">
              <Icon icon="clarity:users-solid" color="#FF3B81" />
              ADMINS
            </SidebarBtn>
            <SidebarBtn url="/activity">
              <Icon icon="ant-design:video-camera-outlined" color="#FF3B81" />
              CAMERAS
            </SidebarBtn>
            <SidebarBtn url="/messages">
              <Icon icon="mdi:police-badge-outline" color="#FF3B81" />
              AUTHORITIES
            </SidebarBtn>
            <SidebarBtn url={`/profile`}>
              <Icon icon="bx:history" color="#FF3B81" />
              HISTORY
            </SidebarBtn>
          </div>

          <LogoutBtn onClick={handleLogout}>
            {" "}
            <Icon icon="ri:logout-box-line" color="#FF3B81" />
            LOGOUT
          </LogoutBtn>
        </MainSidebar>
      </SidebarDrawer>
    </SidebarContainer>
  );
};

export default Sidebar;
