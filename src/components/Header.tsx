import Brightness4Icon from "@mui/icons-material/Brightness4";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { toggleTheme } from "../store/slices/themeSlice";

export function Header() {
  const dispatch = useAppDispatch();

  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <AppBar position="static" sx={{ marginBottom: "1rem" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GrowAvalia
        </Typography>

        <IconButton color="inherit" onClick={handleToggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
