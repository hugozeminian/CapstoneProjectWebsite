{
  /*
In this code, a FileInput component is defined, 
which provides functionality for selecting and displaying a file. 
The component utilizes Material-UI icons, styles are defined using makeStyles hook from Material-UI, 
and the theme is imported from a custom theme file. 
The component allows users to select a file using a button, display the selected file's name, and remove the selected file. */
}

import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import theme from "../../theme/Theme";
import { Box, Button, Typography } from "@mui/material";

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
    maxWidth: "200px",
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

const FileInput = ({ onFileChange, index}) => {
  const classes = useStyles(); // Initializing styles using useStyles hook
  const inputRef = useRef(); // Creating a ref for file input

  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  // Handle the change event when a file is selected
  const handleOnChange = (event) => {
    const file = event.target.files[0]

    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(file); // Updating selected file state
    }
   
    const formData = new FormData();
      formData.append("imagefile", inputRef.current.files[0]);
      
      onFileChange(file, index) // Call the function passed from the parent
      // onFileChange(formData, index) // Call the function passed from the parent

      // // Create a custom object with file information
      // const formDataObject = {
      //   imagefile: {
      //     name: formData.get("imagefile").name,
      //     type: formData.get("imagefile").type,
      //     size: formData.get("imagefile").size,
      //   },
      // };

      // console.log("🚀 ~ handleOnChange ~ formData:", formData.get("imagefile"));
    };

  // const handleOnChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (event) => {
  //       // setSelectedFile(event.target.result);
  //       setSelectedFile(file);
  //     };
  //     reader.readAsDataURL(file);
  //   } else {
  //     setSelectedFile(null);
  //   }
  
  //   // Create FormData object and append the file
  //   const formData = new FormData();
  //   formData.append("imagefile", file, file.name);

  //   // // Create a custom object with file information
  //   // const formDataObject = {
  //   //   imagefile: {
  //   //     name: formData.get("imagefile").name,
  //   //     type: formData.get("imagefile").type,
  //   //     size: formData.get("imagefile").size,
  //   //   },
  //   // };

  //   // console.log("🚀 ~ handleOnChange ~ formData:", formDataObject);

  //   onFileChange(formData, index)
  
  // };
  

  // Function to trigger the file input dialog
  
  const onChooseFile = () => {
    inputRef.current.click(); // Clicking the file input element
    // console.log(inputRef.current.files[0])
  };

  // Function to remove the selected file
  const removeFile = () => {
    setSelectedFile(null); // Resetting selected file state
  };

  return (
    <Box className={classes.fileInputContainer}>
      {/* Hidden file input element */}
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      <Button className={classes.fileBtn} onClick={onChooseFile}>
        <Typography className={classes.materialSymbolsRounded}>
          <CloudUploadIcon />
        </Typography>{" "}
      </Button>

      {selectedFile && (
        <Box className={classes.selectedFile}>
          <Typography className={classes.selectedFileText}>
            {selectedFile.name}
          </Typography>

          <Button className={classes.deleteButton} onClick={removeFile}>
            <Typography className={classes.materialSymbolsRounded}>
              <DeleteOutlineIcon />
            </Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default FileInput;
