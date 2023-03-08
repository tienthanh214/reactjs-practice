import { Grid } from "@mui/material";
import ImageCard from "../components/ImageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import { getImageSrc } from "../data/imageAPI";

export default function ImageGrid() {
	const NUM_IMAGE_PER_LOAD = 30
	const [currentLength, setCurrentLength] = useState(10);
	const [hasMore, setHasMore] = useState(true);
	const { imageList } = useSelector((state: RootState) => state.imageList);

	const fetchData = () => {
		if (currentLength >= imageList.length) {
			setHasMore(false)
			return
		}
		setCurrentLength((currentLength) => currentLength + NUM_IMAGE_PER_LOAD)
		setHasMore(true)
	};

	return (
		<div>
			<InfiniteScroll
				dataLength={currentLength}
				next={fetchData}
				hasMore={hasMore}
				loader={
					<h4 style={{ textAlign: "center", marginTop: 5 }}>Loading...</h4>
				}
				endMessage={
					<p style={{ textAlign: "center", marginTop: 5 }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
				style={{ overflow: "hidden", height: "100%" }}
			>
				<Grid container spacing={2} justifyContent="center" sx={{ padding: 4 }}>
					{imageList.map((imageId) => (
						<Grid item key={imageId}>
							<ImageCard
								src={getImageSrc(imageId)}
								width="200px"
								height="180px"
								title={imageId}
							/>
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		</div>
	);
}
