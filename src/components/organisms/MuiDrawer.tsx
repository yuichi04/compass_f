import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HelpIcon from "@mui/icons-material/Help";
import QuizIcon from "@mui/icons-material/Quiz";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { useLogOut } from "../../hooks/useLogOut";

const MuiDrawer: React.FC = React.memo(() => {
  const [open, setOpen] = React.useState(false);
  const { handleClick } = useLogOut();

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  const list = () => (
    <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="山下勇一さん" secondary="sparklingengineer.yuya04gen@gmail.com" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QuizIcon />
            </ListItemIcon>
            <ListItemText primary="クイズ一覧" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeMotionIcon />
            </ListItemIcon>
            <ListItemText primary="作成したメモ" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="ヘルプ" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="お問い合わせ" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton aria-label="menus" onClick={toggleDrawer} sx={{ color: "#fff" }}>
        <MenuOpenIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </>
  );
});

export default MuiDrawer;
