import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ButtonCustom from "../button-custom/ButtonCustom";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "400px",
  maxHeight: "90vh",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.8)",
  p: 4,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function ModalServices({ open, onClose, img, title, desc }) {
  return (
    <>
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
          <Box sx={style}>
            <CardMedia
              component="img"
              height="250"
              image={img}
              alt="card service"
              sx={{ objectFit: "cover" }}
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
            <Typography id="transition-modal-description" mt={1} align="justify">
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
    </>
  );
}
