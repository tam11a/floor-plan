import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		primary: {
			main: "#232323",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#FF9017",
			contrastText: "#232323",
		},
		success: {
			light: "#9bd99b",
			main: "#5ec25e",
			dark: "#36b336",
			contrastText: "#fff",
		},
		warning: {
			light: "#f3b999",
			main: "#ed9666",
			dark: "#e15000",
			contrastText: "#fff",
		},
		error: {
			light: "#d0736e",
			main: "#c1453d",
			dark: "#b1160d",
			contrastText: "#fff",
		},
	},
	typography: {
		fontFamily: "Changa, sans-serif",
	},
});

export default theme;
