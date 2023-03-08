import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { Box, display } from "@mui/system";

type IProps = {
	date?: string;
	day_of_week?: string;
	id?: string;
	local_time?: string;
	location_address?: string;
	location_type?: string;
	part_of_day?: string;
	open: boolean;
};

export default function ImageModal(props: IProps) {
	const id = "aisdasisa";
  const date = "21/4/2001"
  const local_time = "Abc"
  const location_address = "zyz"
  const day_of_week = "thursday"
  const part_of_day = "aaaaa"
  const location_type = "Gafasfas"
	const src =
		"https://lifeseeker-sv.computing.dcu.ie/201901/04/20190104_192619_000.webp";
	const handleClose = () => {};
	return (
		<Modal
			open={props.open}
			onClose={handleClose}
			slots={{ backdrop: Backdrop }}
		>
			<Fade in={props.open}>
				<Box sx={style}>
					<Typography variant="h6" component="h2" sx={{ pb: 2 }}>
						{id}
					</Typography>
					<Box
						src={src}
						style={{ margin: "0 auto" }}
						component="img"
					/>
          <Box sx={{p: 2}}>
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
