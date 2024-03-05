{/*
This code defines a functional component Users that renders a table displaying a list of users. 
It fetches the user data from an API and provides options to add, edit, and delete users. 
The component also includes a loading spinner while the data is being fetched. 
The layout adjusts dynamically based on the height of the viewport.
 */}

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
} from "@mui/material";
import * as api from "../../api/api"; 
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx"; 
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; 


export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); 
  const { setNotification } = useStateContext(); 

  useEffect(() => {
    getUsers(); 
  }, []);

  const calcDifViewHeigh = CalcDifViewHeigh();

   // Function to handle delete user action
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


  const getUsers = () => {
    setLoading(true); 
    api
      .getUsers()
      .then((usersData) => {
        setLoading(false);  
        setUsers(usersData); 
      })
      .catch(() => {
        setLoading(false); 
      });
  };

  return (
    <>
      <Container
        sx={{
          height: `calc(100vh - ${calcDifViewHeigh}px)`,
        }}
      >
        <Box>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h7">Users</Typography>

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

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h7" color={"text.secondary"}>
                      ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h7" color={"text.secondary"}>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h7" color={"text.secondary"}>
                      Email
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h7" color={"text.secondary"}>
                      Create Date
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h7" color={"text.secondary"}>
                      Actions
                    </Typography>
                  </TableCell>
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

                  users.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell>
                        <Typography variant="h7" color={"text.secondary"}>
                          {u.id}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h7" color={"text.secondary"}>
                          {u.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h7" color={"text.secondary"}>
                          {u.email}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h7" color={"text.secondary"}>
                          {u.created_at}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Link to={"/users/" + u.id}>
                          <ButtonCustom label="Edit" width="100px" />
                        </Link>
       
                        {u.id !== 1 ? (
                          <ButtonCustom
                            onClick={(ev) => onDeleteClick(u)}
                            label="Delete"
                            background="text.error"
                            borderColorHover="text.error"
                            ml={1}
                            width="100px"
                          />
                        ) : (
                          ""
                        )}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}
