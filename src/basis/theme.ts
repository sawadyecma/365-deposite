import { createTheme } from "@mui/material";
import { purple, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});
