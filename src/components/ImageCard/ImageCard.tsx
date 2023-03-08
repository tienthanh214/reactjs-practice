import { Card, ImageListItem, ImageListItemBar } from "@mui/material";
import { useDispatch } from "react-redux";
import {
	setImageModalData,
	setImageModalOpen,
} from "../../actions/imageModalAction";
import { getMetadataById } from "../../data/metadataAPI";

export default function ImageCard(props: any) {
	const { src, alt, title, width, height, shot_id, ...rest } = props;
	const dispatch = useDispatch();
	const handleOnClickImage = () => {
		getMetadataById(shot_id)
			.then((res) => {
				if (res.status !== 200) return;
				console.log(res.data);
				res.data.src = src
				dispatch(setImageModalData(res.data));
				dispatch(setImageModalOpen(true));
			})
			.catch(console.log);
	};

	return (
		<Card key={title}>
			<ImageListItem>
				<img
					src={`${src}`}
					alt={title}
					loading="lazy"
					onClick={handleOnClickImage}
					{...rest}
					style={{ maxWidth: "100%", width: width, height: height }}
				/>
				<ImageListItemBar title={title} position="below" />
			</ImageListItem>
		</Card>
	);
}
