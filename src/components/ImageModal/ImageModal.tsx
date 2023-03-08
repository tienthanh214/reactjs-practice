import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { Box, display } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
	clearImageModalData,
	setImageModalData,
	setImageModalOpen,
} from "../../actions/imageModalAction";
import { RootState } from "../../reducers/store";

export interface ImageMetadata {
	date: string;
	day_of_week: string;
	id: string;
	local_time: string;
	location_address: string;
	location_type: string;
	part_of_day: string;
	src: string;
}

export default function ImageModal() {
	const dispatch = useDispatch();
	const {open, data} = useSelector(
		(state: RootState) => state.imageModal
	);
	const {
		id,
		src,
		date,
		part_of_day,
		day_of_week,
		local_time,
		location_address,
		location_type,
	} = data;
	const handleClose = () => {
		dispatch(setImageModalOpen(false));
		dispatch(clearImageModalData());
	};
	return (
		<Modal
			open={open}
			onClose={handleClose}
			slots={{ backdrop: Backdrop }}
		>
			<Fade in={open}>
				<Box sx={style}>
					<Typography variant="h6" component="h2" sx={{ pb: 2 }}>
						{id}
					</Typography>
					<Box src={src} style={{ margin: "0 auto" }} component="img" />
					<Box sx={{ p: 2 }}>
						<Typography>
							<b>Date: </b> {date}
						</Typography>
						<Typography>
							<b>Part of Day: </b> {part_of_day}
						</Typography>
						<Typography>
							<b>Day of Week: </b> {day_of_week}
						</Typography>
						<Typography>
							<b>Local Time: </b> {local_time}
						</Typography>
						<Typography>
							<b>Location Address: </b> {location_address}
						</Typography>
						<Typography>
							<b>Location Type: </b> {location_type}
						</Typography>
					</Box>
				</Box>
			</Fade>
		</Modal>
	);
}

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "white",
	border: "2px solid #000",
	boxShadow: 24,
	p: 2,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
};
