{
  /*
This code defines a functional component named ModalServices responsible for rendering different types of modals based on the modalType prop. 
It utilizes Material-UI components such as Modal, Fade, Box, Typography, CardMedia, and TextField.
The component dynamically renders different styles and content based on the modalType, which can be 'service', 'gallery', or 'admin'.
 */
}

import React, { useState, useEffect, Fragment } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import ButtonCustom from "../button-custom/ButtonCustom";
import Typography from "@mui/material/Typography";
import { CardMedia, TextField } from "@mui/material";
import CarouselImages from "../carousel-images/CarouselImages";
import { IsMobile, getLabelOrNameOfObjItem } from "../../util/generalFunctions";
import TypeOfModal from "../../repository/ModalType";
import FileInput from "../file-input/FileInput";

// Functional component to render different types of modals
const ModalServices = ({
  index = 0,
  open,
  onClose,
  img = null,
  title = null,
  desc = null,
  modalType = TypeOfModal.service,
  cardsData = null,
  obj,
  onChangeFields,
  onChangeImages,
  updateButton,
}) => {
  // State variables to manage selected modal type and uploaded image file
  const [modalTypeSelected, setModalTypeSelected] = useState(modalType);
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (typeof onChangeImages === "function") {
      onChangeImages(imageFile);
    }
  }, [imageFile]);

  // Placeholder image URL
  const imgPlaceHolder = "https://via.placeholder.com/100x100?text=New Image";

  const isMobile = IsMobile(); // Detecting if the device is mobile

  // Function to handle file input change
  const handleFileChange = (selectedFile, index) => {
    // const selectedFile = event.target.files[0];
    setImageFile({ selectedFile: selectedFile, index: index });
    console.log("🚀 ~ handleFileChange ~ imageFile:", selectedFile);
    console.log("🚀 ~ handleFileChange ~ index:", index);
  };

  // Styles for different types of modals
  {
    /* Styles for service modal */
  }
  const styleService = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "400px",
    maxHeight: "90vh",
    bgcolor: "background.default",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
    p: 4,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  {
    /* Styles for gallery modal */
  }
  const styleGallery = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "75vw",
    height: isMobile ? "50%" : "90%",
    maxHeight: "75vh",
    bgcolor: "background.default",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
    p: 4,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  {
    /* Styles for admin modal */
  }
  const styleAdm = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "1280px",
    maxHeight: "90vh",
    bgcolor: "background.alternate_dark",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
    p: 4,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <>
      {modalTypeSelected === TypeOfModal.service && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={styleService}>
              <CardMedia
                component="img"
                height="250"
                image={img}
                alt="card service"
                sx={{ objectFit: "cover", borderRadius: "5px" }}
              />
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                align="center"
                pt={1}
              >
                {title}
              </Typography>
              <Typography
                id="transition-modal-description"
                mt={1}
                align="justify"
              >
                {desc}
              </Typography>
              <ButtonCustom
                label="Close"
                onClick={onClose}
                mt={5}
              ></ButtonCustom>
            </Box>
          </Fade>
        </Modal>
      )}

      {modalTypeSelected === TypeOfModal.gallery && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={styleGallery}>
              <CarouselImages
                images={cardsData}
                width="80%"
                indexImage={index}
              />
            </Box>
          </Fade>
        </Modal>
      )}

      {modalTypeSelected === TypeOfModal.adm && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={onClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={styleAdm}>
              {obj &&
                obj.map((item, index, key) => (
                  <React.Fragment key={`item-${index}`}>
                    <Typography> Item {index + 1} </Typography>
                    <Box
                      key={`obj-${index}`}
                      display={"flex"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      width={"90%"}
                      border={1}
                      px={3}
                      py={1}
                      mb={6}
                      bgcolor={"background.alternate"}
                    >
                      {item.image_path && (
                        <>
                          <Box
                            bgcolor={"primary.accent"}
                            key={`img-${index}`}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                            display={"flex"}
                            alignItems={"center"}
                            flexDirection={"column"}
                          >
                            <Box display={"flex"} alignItems={"center"} p={1}>
                              <Box mr={1} width="100px">
                                <CardMedia
                                  key={`img-old-${index}`}
                                  component="img"
                                  height="100px"
                                  image={item.image_path}
                                  alt="card service"
                                  sx={{ objectFit: "cover" }}
                                />
                              </Box>
                              <Typography> &rarr; </Typography>
                              <Box mx={1}>
                                <CardMedia
                                  key={`img-new-${index}`}
                                  component="img"
                                  height="100px"
                                  image={imgPlaceHolder}
                                  alt="card service"
                                  sx={{ objectFit: "cover" }}
                                />
                              </Box>
                            </Box>
                            <FileInput
                              onFileChange={handleFileChange}
                              index={index}
                            />
                          </Box>
                        </>
                      )}

                      {item.title && (
                        <>
                          <Box
                            key={`title-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.title}
                              label={getLabelOrNameOfObjItem(item, "title", "label")}
                              name={getLabelOrNameOfObjItem(item, "title")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.description && (
                        <>
                          <Box
                            key={`desc-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.description}
                              label={getLabelOrNameOfObjItem(item, "description", "label")}
                              name={getLabelOrNameOfObjItem(item, "description")}
                              multiline
                              rows={5}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.video && (
                        <>
                          <Box
                            key={`video-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.video}
                              label={getLabelOrNameOfObjItem(item, "video", "label")}
                              name={getLabelOrNameOfObjItem(item, "video")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.date && (
                        <>
                          <Box
                            key={`date-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.date}
                              label={getLabelOrNameOfObjItem(item, "date", "label")}
                              name={getLabelOrNameOfObjItem(item, "date")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.time && (
                        <>
                          <Box
                            key={`time-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.time}
                              label={getLabelOrNameOfObjItem(item, "time", "label")}
                              name={getLabelOrNameOfObjItem(item, "time")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.location && (
                        <>
                          <Box
                            key={`location-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.location}
                              label={getLabelOrNameOfObjItem(item, "location", "label")}
                              name={getLabelOrNameOfObjItem(item, "location")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}

                      {item.eticket_link && (
                        <>
                          <Box
                            key={`eticket_link-${index}`}
                            bgcolor={"primary.accent"}
                            border={1}
                            my={1}
                            p={1}
                            width={"100%"}
                          >
                            <TextField
                              p={1}
                              fullWidth
                              defaultValue={item.eticket_link}
                              label={getLabelOrNameOfObjItem(item, "eticket_link", "label")}
                              name={getLabelOrNameOfObjItem(item, "eticket_link")}
                              onChange={(e) => onChangeFields(e, index)}
                            />
                          </Box>
                        </>
                      )}
                    </Box>
                  </React.Fragment>
                ))}

              <Box>
                <ButtonCustom
                  label="Update"
                  onClick={updateButton}
                  mt={5}
                  mx={1}
                  width="120px"
                ></ButtonCustom>
                <ButtonCustom
                  label="Cancel"
                  onClick={onClose}
                  mt={5}
                  mx={1}
                  width="120px"
                  background="text.error"
                  borderColorHover="text.error"
                ></ButtonCustom>
              </Box>
            </Box>
          </Fade>
        </Modal>
      )}
    </>
  );
};

export default ModalServices;
