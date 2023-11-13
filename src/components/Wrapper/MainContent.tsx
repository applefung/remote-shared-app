import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Loading from "../Loading";
import MailIcon from "@mui/icons-material/Mail";
import { ReactNode } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";

interface WrapperProps {
  title: string;
  children: ReactNode;
  isAuth?: boolean;
}

const drawerWidth = 240;

// read from remote config
const items = [
  {
    title: "Doctor",
    path: "/doctors",
  },
  {
    title: "Pharmacy",
    path: "/pharmacies",
  },
  {
    title: "Auth",
    path: "/auth",
  },
];

const MainContent = ({ title, children}: WrapperProps) => {
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.ui.isLoading);
  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map(({ title, path }, index) => (
            <ListItem key={title} disablePadding>
              <ListItemButton onClick={() => navigate(path)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {children}
      </Box>
      <Loading isLoading={loading}/>
    </Box>
  );
};

export default MainContent;
