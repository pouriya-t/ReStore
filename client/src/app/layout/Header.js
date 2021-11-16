import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Switch from "@mui/material/Switch";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch onClick={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
}
