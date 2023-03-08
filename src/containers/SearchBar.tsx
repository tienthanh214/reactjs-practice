import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import DateSearchBox from "../components/DateSearchBox/DateSearchBox";

export default function SearchBar() {
	return (
		<AppBar
			position="sticky"
			style={{
				backgroundColor: "rgba(255, 255, 255, 1)",
				zIndex: 3,
				borderRadius: "0 0 16px 16px",
				display: "flex",
				placeItems: "center",
			}}
		>
			<Toolbar>
				<DateSearchBox listDate={[]} />
			</Toolbar>
		</AppBar>
	);
}
