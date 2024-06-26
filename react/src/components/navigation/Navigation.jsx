import React, { useState, useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import ButtonCustom from "../button-custom/ButtonCustom";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavbarHeight } from "../../context/NavBarHeightContext";
import { useNavigate } from "react-router-dom";

import navigationBarInfo from "../../repository/NavigationBarInfo";
import { Hidden } from "@mui/material";
import PageTitle from "../page-title/PageTitle";
import { Drawer } from "@mui/material";
import ButtonCustomAdmin from "../button-custom-admin/ButtonCustomAdmin";
import SocialIcon from "../social-icon/SocialIcon";
import { fetchGeneralCards, getSettings } from "../../api/api";

// Defining navigation links for different viewports
const navigationLinks = {
  desktop: navigationBarInfo.pages,
  mobile: [],
};

const servicePages = navigationBarInfo.services;

navigationLinks.mobile = [
  navigationLinks.desktop[0],
  ...servicePages,
  navigationLinks.desktop[2],
  navigationLinks.desktop[3],
];
/**
 * Component for rendering navigation bar.
 * @returns {JSX.Element} Navigation bar component.
 */
function Navigation() {
  // State variables for managing drawer state and menu anchors
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [changeArrow, setChangeArrow] = useState(false);
  const [runEffectAgain, setRunEffectAgain] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const [referenceLogo, setReferenceLogo] = useState(
    `settings_content-section1_settings-1`
  );
  const [logo, setLogo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedLogo = await fetchGeneralCards();
        setLogo(updatedLogo.section1_settings[0].image_path);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };
    fetchData();
  }, [referenceLogo]);

  // Reference for navbar height
  const navBarRef = useRef(null);
  const { setNavbarHeight } = useNavbarHeight();
  const navigate = useNavigate();

  const [content, setContent] = useState();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await getSettings();
        setContent(response);
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };
    fetchSettings();
  }, []);

  // Effect to set navbar height
  useEffect(() => {
    if (navBarRef.current) {
      setNavbarHeight(navBarRef.current.clientHeight);
      setTimeout(() => {
        setRunEffectAgain(true);
      }, 10);
    }
  }, [setNavbarHeight, runEffectAgain]);

  // Function to toggle drawer state
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setChangeArrow(!isDrawerOpen);
  };

  // Function to handle closing drawer
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setChangeArrow(false);
  };

  // Function to handle opening navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setChangeArrow(true);
  };

  // Function to handle opening user menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setChangeArrow(true);
  };

  // Function to handle closing navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setChangeArrow(false);
  };

  // Function to handle closing user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setChangeArrow(false);
  };

  // Function to navigate to settings page
  const handleNavigateToSettings = () => {
    navigate("/settings");
  };

  return (
    <>
      <Box mb={2} ref={navBarRef}>
        <AppBar
          position="sticky"
          sx={{ backgroundColor: "background.default" }}
        >
          <Container maxWidth="xl">
            {/* Title */}
            <Hidden mdDown>
              <Typography variant="h3" textAlign={"center"} sx={{ py: 0 }}>
                {navigationBarInfo.title}
              </Typography>
            </Hidden>

            <Toolbar disableGutters>
              {/* Logo desktop */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mx: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <SocialIcon
                  socialIcon={logo}
                  href={"social.link"}
                  width="30px"
                  height="30px"
                />
              </Typography>

              {/* Box desktop */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                }}
              >
                {navigationLinks.desktop.map((page) =>
                  page === "SERVICES" ? (
                    <ButtonCustom
                      key={page}
                      onClick={handleOpenUserMenu}
                      color="text.secondary"
                      background="background.default"
                      backgroundColorHover="primary.main"
                      colorHover="primary.accent"
                      label={page}
                      endIcon={
                        changeArrow ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )
                      }
                      width="120px"
                    />
                  ) : page === "BLOG" ? (
                    <a
                      href={content && content.blog[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      key={page}
                    >
                      <ButtonCustom
                        onClick={handleCloseNavMenu}
                        color="text.secondary"
                        background="background.default"
                        backgroundColorHover="primary.main"
                        colorHover="primary.accent"
                        label={page}
                        width="120px"
                      />
                    </a>
                  ) : (
                    <ButtonCustom
                      key={page}
                      onClick={handleCloseNavMenu}
                      color="text.secondary"
                      background="background.default"
                      backgroundColorHover="primary.main"
                      colorHover="primary.accent"
                      label={page}
                      linkTo={`/${page.toLowerCase()}`}
                      width="120px"
                    />
                  )
                )}
              </Box>

              {/* Menu Desktop */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {servicePages.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
                    sx={{
                      bgcolor: "background.default",
                      color: "text.secondary",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "primary.accent",
                      },
                    }}
                  >
                    <Link
                      to={`/${setting.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>

              {/* Drawer mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={toggleDrawer}
                  sx={{ color: "text.secondary" }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={isDrawerOpen}
                  onClose={handleCloseDrawer}
                >
                  <Box
                    sx={{ width: 250, paddingTop: 2 }}
                    role="presentation"
                    onClick={handleCloseDrawer}
                    onKeyDown={handleCloseDrawer}
                  >
                    {navigationLinks.mobile.map((mobilePage) => (
                      <MenuItem
                        key={mobilePage}
                        sx={{
                          bgcolor: "background.default",
                          color: "text.secondary",
                          "&:hover": {
                            bgcolor: "primary.main",
                            color: "primary.accent",
                          },
                        }}
                      >
                        <Link
                          to={`/${mobilePage.toLowerCase()}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <Typography textAlign="center">
                            {mobilePage}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Box>
                </Drawer>
              </Box>

              {/* Settings button */}
              <ButtonCustomAdmin
                label="Settings"
                endIcon={<SettingsIcon />}
                onClick={handleNavigateToSettings}
                mr="10px"
              />

              {/* Corner Button */}
              <Box sx={{ flexGrow: 0 }}>
                <ButtonCustom
                  onClick={handleCloseDrawer}
                  width={"150px"}
                  label={"GET QUOTE"}
                  linkTo="form"
                ></ButtonCustom>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <PageTitle
        pageTitle={navigationBarInfo.pageTitle}
        services={navigationBarInfo.services}
        pages={navigationBarInfo.pages}
      />
    </>
  );
}

export default Navigation;
