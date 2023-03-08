import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

export default function Loading() {
    const visible = useSelector((state : RootState) => state.loading)
    return visible ? <CircularProgress sx={style} /> : null
}
const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};