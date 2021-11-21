import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  IconButton,
  Badge,
} from "@material-ui/core";
import { ShoppingCart } from "@mui/icons-material";
import { Box } from "@material-ui/system";
import Switch from "@mui/material/Switch";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../../app/context/StoreContext";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": { color: "grey.500" },
  "&.active": { color: "text.secondary" },
};

export default function Header({ darkMode, setDarkMode }) {
  const { basket } = useStoreContext();
  const itemCount = basket.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component={NavLink}
            exact
            to="/"
            sx={navStyles}
          >
            RE-STORE
          </Typography>
          <Switch onClick={() => setDarkMode(!darkMode)} />
        </Box>
        <List sx={{ display: "flex", sm: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box display="flex" alignItems="center">
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            sx={{ color: "inherit" }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{ display: "flex", sm: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
