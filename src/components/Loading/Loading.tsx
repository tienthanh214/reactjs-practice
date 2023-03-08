import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

export default function Loading() {
    const visible = useSelector((state : RootState) => state.loading)
    return visible ? <CircularProgress sx={style} /> : null
}
const style = {
	position: "fixed",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	zIndex: 5,
};