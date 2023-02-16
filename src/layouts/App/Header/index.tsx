import React from "react";
import {
	AppBar,
	Avatar,
	IconButton,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import Iconify from "@components/iconify";
import { Link } from "react-router-dom";

const AppHeader: React.FC = () => {
	return (
		<>
			<AppBar sx={{ bgcolor: "background.paper", color: "primary.main" }}>
				<Toolbar>
					<ListItem className={"gap-3"}>
						<Avatar
							src="/favicon.svg"
							variant="square"
						/>
						<ListItemText
							primary={"Buff'eat"}
							secondary={"Hello, Ibrahim Sadik Tamim!"}
						/>
					</ListItem>
					<Link to={"/app"}>
						<Typography className="mr-4">Home</Typography>
					</Link>
					<IconButton
						color="primary"
						component={Link}
						to={"/app/floor"}
					>
						<Iconify icon={"carbon:floorplan"} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<div className="mb-20" />
		</>
	);
};

export default AppHeader;
