import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import theme from "../../theme/Theme";

const useStyles = makeStyles({
  fileInputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fileBtn: {
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
  },
  materialSymbolsRounded: {
    width: "50px",
    height: "50px",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  selectedFile: {
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.highlight,
    borderRadius: "20px",
    padding: "10px",
  },
  selectedFileText: {
    fontSize: "13px",
    fontWeight: 500,
    marginLeft: "15px",
    maxWidth: "200px", // Adjust the maximum width as needed
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  deleteButton: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: "50%",
    border: `1.5px dashed ${theme.palette.primary.main}`,
    cursor: "pointer",
    marginLeft: "10px",
    transition: "all 0.3s ease",
    "&:hover": {
      color: theme.palette.secondary.accent,
      backgroundColor: theme.palette.primary.main_transparent,
    },
  },
});

const FileInput = () => {
  const classes = useStyles();
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  // Handle the change event when a file is selected
  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className={classes.fileInputContainer}>
      {/* Hidden file input element */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      <button className={classes.fileBtn} onClick={onChooseFile}>
        <span className={classes.materialSymbolsRounded}>
          <CloudUploadIcon />
        </span>{" "}
      </button>

      {selectedFile && (
        <div className={classes.selectedFile}>
          <p className={classes.selectedFileText}>{selectedFile.name}</p>

          <button className={classes.deleteButton} onClick={removeFile}>
            <span className={classes.materialSymbolsRounded}>
              <DeleteOutlineIcon />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
