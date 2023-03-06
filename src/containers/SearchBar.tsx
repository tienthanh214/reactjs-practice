import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DateSearchBox from "../components/DateSearchBox";

export default function SearchBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="static"
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.8)",
					zIndex: 3,
					borderRadius: "0 0 16px 16px",
					display: "flex",
					placeItems: "center"
				}}
			>
				<Toolbar>
					<DateSearchBox listDate={[]} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
