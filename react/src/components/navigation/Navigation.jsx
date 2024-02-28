import React, { useState } from "react";
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
import Logo from "../logo/Logo";
import PageTitle from "../page-title/PageTitle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import navigationBarInfo from "../../repository/NavigationBarInfo";
import { Hidden } from "@mui/material";

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

function Navigation() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [changeArrow, setChangeArrow] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setChangeArrow(true);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setChangeArrow(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setChangeArrow(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setChangeArrow(false);
  };

  return (
    <Box mb="15px">
      <AppBar position="sticky" sx={{ backgroundColor: "background.default" }}>
        <Container maxWidth="xl">
          {/* Title */}
          <Hidden mdDown>
            <Typography variant="h3" textAlign={"center"} sx={{ py: 0 }}>
              {navigationBarInfo.title}
            </Typography>
          </Hidden>

          {/* <Hidden mdDown>
            <PageTitle
              pageTitle={navigationBarInfo.pageTitle}
              services={navigationBarInfo.services}
              pages={navigationBarInfo.pages}
            />
          </Hidden> */}

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
              <Logo logo={navigationBarInfo.logo} />
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
                    href="https://www.google.com"
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

            {/* Box mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "text.secondary" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navigationLinks.mobile.map((mobilePage) => (
                  <MenuItem
                    key={mobilePage}
                    onClick={handleCloseNavMenu}
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
                      <Typography textAlign="center">{mobilePage}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo mobile */}
            {/* <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mx: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}>
            <Logo logo={navigationBarInfo.logo} />
          </Typography> */}

            <Box sx={{ flexGrow: 0 }}>
              <ButtonCustom
                onClick={handleCloseNavMenu}
                width={"150px"}
                label={"GET QUOTE"}
                linkTo="form"
              ></ButtonCustom>
            </Box>

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
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default Navigation;
