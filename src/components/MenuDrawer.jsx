import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ImMenu2 } from "react-icons/im";
import { FaUsers } from "react-icons/fa";

import UsersList from "./UsersList.jsx";

export default function MenuDrawer(props) {
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const [openUsers, setOpenUsers] = useState(false);

  /*************************************************************************/
  function openUsersList() {
    setOpenUsers(!openUsers);
    closeMenu();
  }

  const openMenu = () => (event) => {
    setOpen(!open);
    setAnchor(event.currentTarget);
    console.log("OPEN");
  };
  const closeMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  const list = () => (
    <Box className="md_box">
      <List className="list">
        {["Пользователи"].map((text, index) => (
          <ListItem onClick={() => openUsersList(true)} button key={text}>
            <FaUsers style={{ color: "white", paddingRight: "10px" }} />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  /*************************************************************************/
  return (
    <div>
      <React.Fragment>
        <ImMenu2 size={"27"} onClick={openMenu()}></ImMenu2>
        <Drawer open={open} onClose={openMenu()}>
          {list()}
        </Drawer>
      </React.Fragment>
      <div>
        {openUsers === true && <UsersList openUsersList={openUsersList} />}
      </div>
    </div>
  );
}
