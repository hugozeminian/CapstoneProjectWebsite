import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/TokenContext.jsx";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
  Container,
  Divider,
  Switch,
} from "@mui/material";
import * as api from "../../api/api.js";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";

import ReachOutData from "../../repository/ReachOutData.js";
import SocialIcon from "../../components/social-icon/SocialIcon.jsx";
import ModalServices from "../../components/modal-services/ModalServices.jsx";
import usePageData from "../../components/use-page-data-hook/UsePageDataHook.jsx";
import navigationBarInfo from "../../repository/NavigationBarInfo.js";
import { pageNames, loadingText } from "../../repository/ApiParameters.js";
import { getIconByName } from "../../util/generalFunctions.js";

export default function Settings() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const page = pageNames.settings;

  const {
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    isMobile,
    calcDifViewHeigh,
    openModal,
    objContentModal,
    typeOfModal,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
    pageContent,
    isLoading,
    error,
  } = usePageData(page, api.getSettings);

  const repository = localDataRepositoryOnly ? ReachOutData : pageContent;
  const [content, setContent] = useState(repository);

  useEffect(() => {
    const repository = localDataRepositoryOnly ? ReachOutData : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  const [iconVisibility, setIconVisibility] = useState(() => {
    const initialState = {};
    ReachOutData.socialMedia.forEach((social, index) => {
      initialState[index] = social.isIconVisible;
    });
    return initialState;
  });

  const toggleIconVisibility = (index) => {
    setIconVisibility((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const getUsers = () => {
    setLoading(true);
    api
      .getUsers()
      .then((usersData) => {
        setLoading(false);
        setUsers(usersData.reverse());
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    api
      .deleteUser(user.id)
      .then(() => {
        setNotification("User was successfully deleted");
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const renderTable = () => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            {["ID", "Name", "Email", "Create Date", "Actions"].map(
              (column, index) => (
                <TableCell key={index}>
                  <Typography variant="h7" color={"text.secondary"}>
                    {column}
                  </Typography>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={5} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            users.map((user) => (
              <TableRow key={user.id}>
                {Object.values(user).map((value, index) => (
                  <TableCell key={index}>
                    <Typography variant="h7" color={"text.secondary"}>
                      {value}
                    </Typography>
                  </TableCell>
                ))}
                <TableCell>
                  <Link to={`/users/${user.id}`}>
                    <ButtonCustom label="Edit" width="100px" />
                  </Link>
                  {user.id !== 1 && (
                    <ButtonCustom
                      onClick={() => onDeleteClick(user)}
                      label="Delete"
                      background="text.error"
                      borderColorHover="text.error"
                      ml={1}
                      width="100px"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderContactMe = (contactDataIcon, contactData, contactDataGeneral) => {
    return (
      <Box
        p={1}
        display="flex"
        alignItems="center"
        width={"100%"}
        borderBottom="1px solid"
        borderColor={"secondary.main"}
      >
        <Box flex="0 0 30px" mr={1} width="30px" height="30px">
          <SocialIcon
            socialIcon={getIconByName(contactDataIcon)}
            href={"social.link"}
            width="30px"
            height="30px"
          />
        </Box>

        <Box flex="1" marginLeft={4}>
          <Typography>{contactData}</Typography>
        </Box>

        <Box display={"flex"} flex="0 0 200px" justifyContent={"center"}>
          <ButtonCustom
            width="130px"
            label="Edit"
            onClick={() => handleOpenModal([{ ...contactDataGeneral, Field: contactData }])}
          />
        </Box>
      </Box>
    );
  };

  if (isLoading && !localDataRepositoryOnly) {
    return (
      <Container
        sx={{
          height: "auto",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? "auto"
                : `calc(100vh - ${calcDifViewHeigh}px)`,
          }}
        >
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            style={{ marginRight: "0.5rem" }}
          />
          {loadingText.text}
        </Box>
      </Container>
    ); // Render loading indicator
  }

  return (
    <>
      {content && (
        <>
          <Container
            sx={{
              height: "auto",
            }}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              alignItems="center"
              sx={{
                minHeight:
                  calcDifViewHeigh > window.innerHeight
                    ? "auto"
                    : `calc(100vh - ${calcDifViewHeigh}px)`,
              }}
            >
              <Typography variant="h5">User List</Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
              >
                <Link to="/users/new">
                  <ButtonCustom
                    label="Add New"
                    color="text.secondary"
                    background="background.default"
                    border="2px solid"
                    borderColor="primary.main"
                    backgroundColorHover="primary.main"
                    borderColorHover="primary.main"
                    colorHover="primary.accent"
                  />
                </Link>
              </Box>
              <Box width={"100%"} marginBottom={5}>
                {renderTable()}
              </Box>

              {/* Logo */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                marginTop={8}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                  width={"100%"}
                >
                  {/* Labels for each column */}
                  <Typography variant="h5">My logo</Typography>
                  <Box p={1} display="flex" alignItems="center" width={"100%"}>
                    <Typography flex="1">Image</Typography>
                    <Typography
                      display={"flex"}
                      flex="0 0 200px"
                      justifyContent={"center"}
                    >
                      Action
                    </Typography>
                  </Box>
                  <Box
                    p={1}
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                    width={"100%"}
                    borderBottom="1px solid"
                    borderColor={"secondary.main"}
                  >
                    <Box flex="0 0 30px" mr={1} width="30px" height="30px">
                      <SocialIcon
                        socialIcon={navigationBarInfo.logo}
                        href={"social.link"}
                        width="30px"
                        height="30px"
                      />
                    </Box>

                    <Box
                      display={"flex"}
                      flex="0 0 200px"
                      justifyContent={"center"}
                    >
                      <ButtonCustom
                        width="130px"
                        label="Edit"
                        onClick={() =>
                          handleOpenModal([
                            { image_path: navigationBarInfo.logo },
                          ])
                        }
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Contact me */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                marginTop={8}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                  width={"100%"}
                >
                  {/* Labels for each column */}
                  <Typography variant="h5">Contact me</Typography>
                  <Box p={1} display="flex" alignItems="center" width={"100%"}>
                    <Typography flex="0 0 30px">Icon</Typography>
                    <Typography flex="1" marginLeft={4}>
                      Information
                    </Typography>
                    <Typography
                      display={"flex"}
                      flex="0 0 200px"
                      justifyContent={"center"}
                    >
                      Action
                    </Typography>
                  </Box>

                  {/* Contact data */}

                  {renderContactMe(
                    content.contactMe.contactMeNumberIcon,
                    content.contactMe.contactMeNumber,
                    content.contactMe
                  )}

                  {renderContactMe(
                    content.contactMe.contactMeEmailIcon,
                    content.contactMe.contactMeEmail,
                    content.contactMe
                  )}

                  {renderContactMe(
                    content.contactForm.contactFormIcon_Hover,
                    content.contactForm.contactFormEmail,
                    content.contactMe
                  )}

                  {renderContactMe(
                    content.blog.icon,
                    content.blog.link,
                    content.blog
                  )}
                </Box>
              </Box>

              {/* Social Networking */}
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                width={"100%"}
                marginTop={8}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection={"column"}
                  width={"100%"}
                >
                  {/* Labels for each column */}
                  <Typography variant="h5">Social Media</Typography>
                  <Box p={1} display="flex" alignItems="center" width={"100%"}>
                    <Typography flex="0 0 30px">Icon</Typography>
                    <Typography flex="1" marginLeft={4}>
                      Link
                    </Typography>
                    <Typography
                      display={"flex"}
                      flex="0 0 200px"
                      justifyContent={"center"}
                    >
                      Visible
                    </Typography>
                    <Typography
                      display={"flex"}
                      flex="0 0 200px"
                      justifyContent={"center"}
                    >
                      Action
                    </Typography>
                  </Box>

                  {/* Social media data */}
                  {ReachOutData.socialMedia.map((social, index) => (
                    <Box
                      key={index}
                      p={1}
                      display="flex"
                      alignItems="center"
                      width={"100%"}
                      borderBottom="1px solid"
                      borderColor={"secondary.main"}
                    >
                      <Box flex="0 0 30px" mr={1}>
                        <SocialIcon
                          socialIcon={social.icon}
                          href={social.link}
                          width="30px"
                          height="30px"
                        />
                      </Box>

                      <Box flex="1" marginLeft={4}>
                        <Typography>{social.link}</Typography>
                      </Box>

                      <Box
                        display={"flex"}
                        flex="0 0 200px"
                        justifyContent={"center"}
                      >
                        <Switch
                          checked={iconVisibility[index]}
                          onChange={() => toggleIconVisibility(index)}
                        />
                      </Box>

                      <Box
                        display={"flex"}
                        flex="0 0 200px"
                        justifyContent={"center"}
                      >
                        <ButtonCustom
                          width="130px"
                          label="Edit Link"
                          onClick={() =>
                            handleOpenModal([{ link: social.link }])
                          }
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Container>
          <ModalServices
            open={openModal}
            onClose={handleCloseModal}
            obj={objContentModal}
            modalType={typeOfModal.adm}
            onChangeFields={handleOnChangeFieldsModal}
            onChangeImages={handleOnChangeImagesModal}
            updateButton={handleUpdateDateModal}
          />
        </>
      )}
    </>
  );
}