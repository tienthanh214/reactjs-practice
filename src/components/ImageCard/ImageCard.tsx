import { Card, ImageListItem, ImageListItemBar } from "@mui/material";

export default function ImageCard(props: any) {
	const { src, alt, title, width, height, ...rest } = props;
	return (
		<Card key={title}>
			<ImageListItem>
				<img
					src={`${src}`}
					alt={title}
					loading="lazy"
					{...rest}
					style={{ maxWidth: "100%", width: width, height: height}}
				/>
				<ImageListItemBar title={title} position="below" />
			</ImageListItem>
		</Card>
	);
}
