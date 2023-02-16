import Table from "@components/floor-plan/table";
import Iconify from "@components/iconify";
import { Container, IconButton, Paper, Typography } from "@mui/material";
import { InputNumber, Slider } from "antd";
import React from "react";

const Floor: React.FC = () => {
	const [chair, setChair] = React.useState(6);
	const [angle, setAngle] = React.useState(0);
	return (
		<Container className="flex flex-row py-40">
			<div className="flex-1">
				{/* <Table chair={8} />
			<Table
				shape="circular"
				chair={8}
			/>
			<Table
				shape="square"
				chair={3}
			/> */}

				{/* <Table.Circle /> */}
				<Table.Rect
					chair={chair}
					angle={angle}
				/>

				<Table.Rect
					chair={chair}
					angle={angle}
				/>
				<Table.Rect
					chair={chair}
					angle={angle}
				/>
				{/* <Table.Square /> */}
				{/* <Table
				shape="square"
				chair={4}
				angle={45}
			/>
			<Table angle={45} />

			<Table angle={-45} /> */}
			</div>
			<Paper className="flex flex-col min-w-[300px] p-4">
				<Typography variant="subtitle2">Seat Number</Typography>
				<InputNumber
					size="large"
					value={chair}
					min={1}
					onChange={(v) => setChair(v || 1)}
					className="w-full"
				/>
				<div className="flex flex-row items-center mt-3">
					<Typography variant="subtitle2">Angle ({angle}&deg;)</Typography>
					<IconButton
						color="info"
						onClick={() => setAngle(0)}
					>
						<Iconify icon={"bx:reset"} />
					</IconButton>
				</div>
				<Slider
					included={false}
					min={-360}
					max={360}
					value={angle}
					onChange={(v) => setAngle(v)}
				/>
			</Paper>
		</Container>
	);
};

export default Floor;
