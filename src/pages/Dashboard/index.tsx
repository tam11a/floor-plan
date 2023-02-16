import { Avatar, Container } from "@mui/material";
import React from "react";

const Dashboard: React.FC = () => {
	return (
		<Container>
			<Avatar
				src="/illustration.svg"
				variant="square"
				sx={{
					width: "95vw",
					height: "100%",
					maxWidth: "640px",
					mx: "auto",
					py: 4,
				}}
			/>
		</Container>
	);
};

export default Dashboard;
