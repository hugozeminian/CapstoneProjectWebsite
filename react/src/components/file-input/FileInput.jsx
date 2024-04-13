import React, { useEffect, useRef, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import theme from "../../theme/Theme";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ButtonCustomAdmin from "../button-custom-admin/ButtonCustomAdmin";
import { IsMobile } from "../../util/generalFunctions";

const FileInputContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const FileBtn = styled(Button)(({ theme }) => ({
  width: "70px",
  height: "70px",
  fontSize: "18px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.accent,
  border: `1.5px dashed ${theme.palette.primary.main}`,
  borderRadius: "20px",
  cursor: "pointer",
  marginBottom: "20px",
  "&:hover": {
    color: theme.palette.secondary.accent,
    backgroundColor: theme.palette.primary.main_transparent,
  },
}));

const MaterialSymbolsRounded = styled(Typography)({
  width: "50px",
  height: "50px",
  color: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
});

const SelectedFile = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.highlight,
  borderRadius: "20px",
  padding: "10px",
});

const SelectedFileText = styled(Typography)({
  fontSize: "13px",
  fontWeight: 500,
  marginLeft: "15px",
  maxWidth: "200px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const DeleteButton = styled(Button)(({ theme }) => ({
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  borderRadius: "20%",
  border: `1.5px dashed ${theme.palette.primary.main}`,
  cursor: "pointer",
  marginLeft: "10px",
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.secondary.accent,
    backgroundColor: theme.palette.primary.main_transparent,
  },
}));

const FileInput = ({
  onFileChange,
  index,
  regularButtonShape = false,
  width = "160px",
  labelButton = "replace",
}) => {
  const isMobile = IsMobile();
  const inputRef = useRef();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOnChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);

      if (onFileChange && typeof onFileChange === "function") {
        onFileChange(file, index, imageUrl);
      }

      event.target.value = null;
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (onFileChange && typeof onFileChange === "function") {
      onFileChange(null, index, null);
    }
  };

  return (
    <>
      {!regularButtonShape ? (
        <FileInputContainer>
          <input
            type="file"
            ref={inputRef}
            onChange={handleOnChange}
            style={{ display: "none" }}
            accept="image/*"
          />
          <FileBtn onClick={onChooseFile}>
            <MaterialSymbolsRounded>
              <CloudUploadIcon />
            </MaterialSymbolsRounded>
          </FileBtn>
          {selectedFile && (
            <SelectedFile>
              <SelectedFileText>{selectedFile.name}</SelectedFileText>
              <DeleteButton onClick={removeFile}>
                <MaterialSymbolsRounded>
                  <DeleteOutlineIcon />
                </MaterialSymbolsRounded>
              </DeleteButton>
            </SelectedFile>
          )}
        </FileInputContainer>
      ) : (
        <Box sx={{ marginRight: "10px" }}>
          <input
            type="file"
            ref={inputRef}
            onChange={handleOnChange}
            style={{ display: "none" }}
            accept="image/*"
          />
          <ButtonCustomAdmin
            width={isMobile ? "100%" : width}
            label={labelButton}
            onClick={onChooseFile}
            style={{ marginRight: "10px" }}
          />
        </Box>
      )}
    </>
  );
};

export default FileInput;
