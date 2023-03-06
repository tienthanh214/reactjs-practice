import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

type IProps = {
	listDate : string[]
}

export default function DateSearchBox({listDate} : IProps) {
	const [selectedDate, setSelectedDate] = useState<string | null>(null)
	listDate = ['2021-01-02', '2022-04-06']
	const handleOnClickSearch = () => {
		if (!selectedDate) return
		console.log("Call API get data by date", selectedDate)
	}

	const handleOnChangeDate = (e : any, newValue : string | null) => {
		setSelectedDate(newValue)
	}

	return (
		<div className={styles["search-box"]}>
			<Autocomplete
				value={selectedDate}
				onChange={handleOnChangeDate}
				options={listDate}
				size="small"
				sx={{ width: 200 }}
				selectOnFocus
				clearOnBlur
				renderInput={(params) => <TextField {...params} label="🗓 Date" />}
			/>
			<Button
				variant="contained"
				startIcon={<SearchIcon fontSize="small" />}
				size="small"
				onClick={handleOnClickSearch}
			>
				Search
			</Button>
		</div>
	);
}
