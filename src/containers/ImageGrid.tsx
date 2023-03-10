import { Grid } from "@mui/material";
import ImageCard from "../components/ImageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../reducers/store";
import { getImageSrc } from "../data/imageAPI";
import ImageModal from "../components/ImageModal/ImageModal";
import Loading from "../components/Loading/Loading";

export default function ImageGrid() {
	const NUM_IMAGE_PER_LOAD = 30
	const NUM_INITIAL_VISIBLE_ITEMS = 60
	const [currentLength, setCurrentLength] = useState(0);
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

	useEffect(() => {
		window.scrollTo(0, 0)
		setCurrentLength(NUM_INITIAL_VISIBLE_ITEMS)
		if (NUM_INITIAL_VISIBLE_ITEMS > imageList.length) {
			setHasMore(false)
			return
		}
		setHasMore(true)
	}, [imageList])

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
					{imageList.slice(0, currentLength).map((imageId : string) => (
						<Grid item key={imageId}>
							<ImageCard
								src={getImageSrc(imageId)}
								width="256px"
								height="180px"
								title={imageId}
								shot_id={imageId}
							/>
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
			{/* show image on click */}
			<ImageModal />
			{/*  */}
			<Loading />
		</div>
	);
}
