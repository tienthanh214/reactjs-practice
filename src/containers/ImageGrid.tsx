import { Grid, ImageList, ImageListItem } from "@mui/material";
import ImageCard from "../components/ImageCard/ImageCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export default function ImageGrid() {
	const [currentLength, setCurrentLength] = useState(10);
	const [hasMore, setHasMore] = useState(true);
	const [imageList, setImageList] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const fetchData = () => {
    console.log(imageList)
    if (imageList.length > 100) {
      setHasMore(false)
    }
    let newItems : number[] = [...imageList]
    for (let i = 0; i < 10; ++i) newItems.push(0)
    
    setImageList(newItems)
    setCurrentLength(newItems.length)
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
        style={{overflow: 'hidden', height: '100%'}}
			>
				<Grid container spacing={2} justifyContent="center" sx={{ padding: 4 }}>
					{imageList.map((x) => (
						<Grid item key={x}>
							<ImageCard
								src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
								width="256px"
								title="Hello world"
              
							/>
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		</div>
	);
}
