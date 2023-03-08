import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { getDateList, getImageListByDate } from "../../data/metadataAPI";
import { useDispatch } from "react-redux";
import { setImageList } from "../../actions/imageListAction";

export default function DateSearchBox() {
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [listDate, setListDate] = useState<string[]>([]);

	const dispatch = useDispatch();

	useEffect(() => {
		getDateList()
			.then((res) => {
				if (res.status !== 200) return;
				setListDate(res.data);
			})
			.catch(console.log);
	}, []); // first render only

	const handleOnClickSearch = () => {
		if (!selectedDate) return;
		getImageListByDate(selectedDate)
			.then((res) => {
				if (res.status !== 200) return;
				dispatch(setImageList(res.data || []));
			})
			.catch(console.log);
	};

	const handleOnChangeDate = (e: any, newValue: string | null) => {
		setSelectedDate(newValue);
	};

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
