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
  Switch,
  Button,
} from "@mui/material";
import * as api from "../../api/api.js";
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx";

import SocialIcon from "../../components/social-icon/SocialIcon.jsx";
import ModalServices from "../../components/modal-services/ModalServices.jsx";
import usePageData from "../../components/use-page-data-hook/UsePageDataHook.jsx";
import { pageNames, loadingText } from "../../repository/ApiParameters.js";
import { getIconByName } from "../../util/generalFunctions.js";
import { SettingsObjectExample } from "../../repository/_exempleObject.js";
import FileInput from "../../components/file-input/FileInput.jsx";

export default function Settings() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user, setNotification } = useStateContext();
  const [userAux, setUserAux] = useState("");

  useEffect(() => {
    setUserAux(user);
  }, [user, userAux]);

  useEffect(() => {
    getUsers();
  }, [userAux]);

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
    toggleUpdateButtonModal,
    isObjField,
    toggleSwitch,
    handleToggleSwitch,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
    pageContent,
    isLoading,
    error,
  } = usePageData(page, api.getSettings);

  const repository = localDataRepositoryOnly
    ? SettingsObjectExample
    : pageContent;
  const [content, setContent] = useState(repository);
  const [referenceLogo, setReferenceLogo] = useState(
    `settings_content-section1_settings-1`
  );
  const [logo, setLogo] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const updatedLogo = await api.fetchGeneralCardByReference(
  //         referenceLogo
  //       );
  //       setLogo(updatedLogo.data);
  //     } catch (error) {
  //       console.error("Error fetching logo:", error);
  //     }
  //   };

  //   fetchData();
  // }, [referenceLogo]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedLogo = await api.fetchGeneralCards();
        setLogo(updatedLogo.section1_settings[0].image_path);
      } catch (error) {
        console.error("Error fetching logo:", error);
      }
    };

    fetchData();
  }, [referenceLogo, userAux]);

  useEffect(() => {
    const repository = localDataRepositoryOnly
      ? SettingsObjectExample
      : pageContent;
    setContent(repository);
  }, [localDataRepositoryOnly, pageContent]);

  const [iconVisibility, setIconVisibility] = useState({});

  const handleChangeLogo = async (selectedFile) => {
    const newPartner = {
      page: page,
      section: "section1_settings",
      reference: referenceLogo,
      title: "",
      description: "",
      video: "",
      date_info: "",
      time_info: "",
      location_info: "",
      eticket_link: "",
      imagefile: selectedFile,
    };

    const formData = new FormData();

    for (const key in newPartner) {
      if (Object.hasOwnProperty.call(newPartner, key)) {
        formData.append(key, newPartner[key]);
      }
    }

    try {
      await api.updateGeneralCards(referenceLogo, formData);
      // console.log("New post created successfully!");
      // Fetch updated data from the server
      const updatedContent = await api.fetchGeneralCards(page);
      setContent(updatedContent);
    } catch (error) {
      console.error("Error creating new card:", error);
      throw error;
    } finally {
      window.location.reload();
    }
  };

  // Initialize iconVisibility with default values
  const initializeIconVisibility = (content) => {
    const initialState = {};
    if (content && content.socialMedia) {
      content.socialMedia.forEach((social, index) => {
        initialState[index] = social.isIconVisible || false;
      });
    }
    return initialState;
  };

  useEffect(() => {
    if (content && content.socialMedia) {
      setIconVisibility(initializeIconVisibility(content));
    }
  }, [content]);

  const toggleIconVisibility = (index) => {
    setIconVisibility((prevState) => {
      const updatedIconVisibility = { ...prevState };
      const updatedData = [...content.socialMedia]; // Make a copy of the data array

      // Toggle the isIconVisible property of the corresponding data object
      updatedData[index].isIconVisible = !updatedData[index].isIconVisible;

      // Update the state with the modified data
      setContent((prevContent) => ({
        ...prevContent,
        socialMedia: updatedData,
      }));

      // Update the iconVisibility state
      updatedIconVisibility[index] = !prevState[index];
      return updatedIconVisibility;
    });
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
                  <ButtonCustom
                    label="Edit"
                    width="100px"
                    linkTo={`/users/${user.id}`}
                    disabled={
                      parseInt(userAux) !== 1 &&
                      parseInt(userAux) !== parseInt(user.id)
                    }
                  />

                  {user.id !== 1 && (
                    <ButtonCustom
                      onClick={() => onDeleteClick(user)}
                      label="Delete"
                      colorHover="text.error"
                      background="text.error"
                      borderColorHover="text.error"
                      ml={1}
                      width="100px"
                      disabled={parseInt(userAux) !== 1}
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

  const renderContactMeObject = (settingsObjectContactMe, objKey) => {
    if (
      !Array.isArray(settingsObjectContactMe) ||
      settingsObjectContactMe.length === 0
    ) {
      return null;
    }

    return settingsObjectContactMe.map((data, index) => (
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
            socialIcon={getIconByName(data.icon, true)}
            href={data.link}
            width="30px"
            height="30px"
          />
        </Box>
        <Box flex="1" marginLeft={4}>
          <Typography>{data.link}</Typography>
        </Box>
        <Box display={"flex"} flex="0 0 200px" justifyContent={"center"}>
          <ButtonCustom
            width="130px"
            label="Edit"
            onClick={() => handleOpenModal(objKey, [data])}
          />
        </Box>
      </Box>
    ));
  };

  const renderSocialMediaObject = (settingsObjectSocialMedia, objKey) => {
    if (
      !Array.isArray(settingsObjectSocialMedia) ||
      settingsObjectSocialMedia.length === 0
    ) {
      return null;
    }

    return settingsObjectSocialMedia.map((data, index) => (
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
            socialIcon={getIconByName(data.icon)}
            href={data.link}
            width="30px"
            height="30px"
          />
        </Box>
        <Box flex="1" marginLeft={4}>
          <Typography>{data.link}</Typography>
        </Box>
        <Box display={"flex"} flex="0 0 200px" justifyContent={"center"}>
          <Switch
            checked={iconVisibility[index] || false}
            // onChange={() => toggleIconVisibility(index)}
            onChange={() => {
              toggleIconVisibility(index),
                handleToggleSwitch(
                  objKey,
                  [data],
                  [index],
                  settingsObjectSocialMedia
                );
            }}
          />
        </Box>
        <Box display={"flex"} flex="0 0 200px" justifyContent={"center"}>
          <ButtonCustom
            width="130px"
            label="Edit Link"
            onClick={() =>
              handleOpenModal(
                objKey,
                [data],
                [index],
                settingsObjectSocialMedia
              )
            }
          />
        </Box>
      </Box>
    ));
  };

  if (isLoading && !localDataRepositoryOnly) {
    return (
      <Container display="flex">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight:
              calcDifViewHeigh > window.innerHeight
                ? `70vh`
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
                    color="primary.main"
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
                        socialIcon={logo}
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
                      <FileInput
                        onFileChange={handleChangeLogo}
                        index={0}
                        regularButtonShape={true}
                        width="130px"
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

                  {/* Social media data */}
                  {renderContactMeObject(content.contactPhone, "contactPhone")}
                  {renderContactMeObject(content.contactEmail, "contactEmail")}
                  {renderContactMeObject(content.contactForm, "contactForm")}
                  {renderContactMeObject(content.blog, "blog")}
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
                  {renderSocialMediaObject(content.socialMedia, "socialMedia")}
                </Box>
              </Box>
            </Box>
          </Container>
          <ModalServices
            open={openModal}
            onClose={handleCloseModal}
            obj={objContentModal}
            isObjField={isObjField}
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
