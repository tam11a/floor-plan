import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		text: {
			primary: "#ECEFF4",
			secondary: "#D8DEE9",
			disabled: "#c8cecc",
		},
		primary: {
			main: "#ECEFF4",
			contrastText: "#2E3440",
		},
		secondary: {
			main: "#FF9017",
			contrastText: "#2E3440",
		},
		success: {
			light: "#9bd99b",
			main: "#5ec25e",
			dark: "#36b336",
			contrastText: "#ECEFF4",
		},
		warning: {
			light: "#f3b999",
			main: "#ed9666",
			dark: "#e15000",
			contrastText: "#ECEFF4",
		},
		error: {
			light: "#d0736e",
			main: "#c1453d",
			dark: "#b1160d",
			contrastText: "#ECEFF4",
		},
		background: {
			paper: "#2E3440",
			default: "#3B4252",
		},
	},
	typography: {
		fontFamily: "Changa, sans-serif",
	},
});

export default theme;
