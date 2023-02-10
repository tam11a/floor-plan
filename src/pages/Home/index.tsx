import { Avatar, Button, ListItemText } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
	return (
		<>
			<div />
			<div className="flex flex-row items-center gap-2">
				<Avatar
					src="/favicon.svg"
					variant="rounded"
					className="h-24 w-24 rotate-12"
				/>
				<ListItemText
					primary={"Cafee'e"}
					secondary={"Manage Your Restaurant"}
					// className="text-"
					primaryTypographyProps={{ className: "text-5xl" }}
					secondaryTypographyProps={{ className: "text-sm pl-1" }}
				/>
			</div>
			<div />
			<Button
				variant="contained"
				size="large"
			>
				Get Started
			</Button>
		</>
	);
};

export default Home;
