import { createTheme } from "@mui/material";
import { purple, yellow, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: purple[500],
    },
    background: {
      default: grey[300],
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 1,
      },
    },
  },
});
