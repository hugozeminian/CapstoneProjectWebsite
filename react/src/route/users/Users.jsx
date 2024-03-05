{/*
This code defines a functional component Users that renders a table displaying a list of users. 
It fetches the user data from an API and provides options to add, edit, and delete users. 
The component also includes a loading spinner while the data is being fetched. 
The layout adjusts dynamically based on the height of the viewport.
 */}

import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom
import { useStateContext } from "../../context/ContextProvider.jsx"; // Importing useStateContext from ContextProvider.jsx
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
import * as api from "../../api/api"; // Importing API functions from api.js
import ButtonCustom from "../../components/button-custom/ButtonCustom.jsx"; // Importing ButtonCustom component
import { CalcDifViewHeigh } from "../../util/generalFunctions.js"; // Importing CalcDifViewHeigh function from generalFunctions.js


// Functional component for rendering users list

export default function Users() {
  const [users, setUsers] = useState([]); // State variable to store users data
  const [loading, setLoading] = useState(false); // State variable to track loading status
  const { setNotification } = useStateContext(); // Destructuring setNotification function from the context

   // Effect hook to fetch users data on component mount
  useEffect(() => {
    getUsers(); // Fetching users data
  }, []);

  // Function to calculate height difference of the view
  const calcDifViewHeigh = CalcDifViewHeigh();

   // Function to handle delete user action
  const onDeleteClick = (user) => {
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }
    api
      .deleteUser(user.id)
      .then(() => {
        setNotification("User was successfully deleted"); // Setting notification message
        getUsers(); // Fetching updated users data
      })
      .catch((error) => {
        console.error("Error deleting user:", error); // Logging error to console
      });
  };

  // Function to fetch users data from the API
  const getUsers = () => {
    setLoading(true); // Setting loading to true
    api
      .getUsers()
      .then((usersData) => {
        setLoading(false);  // Setting loading to false
        setUsers(usersData); // Setting users data
      })
      .catch(() => {
        setLoading(false); // Setting loading to false
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
          {/* Box to contain the users list */}
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h7">Users</Typography>
            {/* Link to add new user */}
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
           {/* Table to display users */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  {/* Table headings */}
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
                 {/* Displaying loading spinner if data is still loading */}
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                   // Mapping through users data and displaying each user in a table row
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
                         {/* Delete button with condition to disable deletion of the first user */}
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
