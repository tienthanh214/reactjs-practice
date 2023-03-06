import { Grid, ImageList, ImageListItem } from '@mui/material'
import ImageCard from '../components/ImageCard/ImageCard'

export default function ImageGrid() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{padding: 4}}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(x => (
        <Grid item key={x}>
          <ImageCard src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`} width="256px" title="Hello world"/>
        </Grid>
      ))}
    </Grid>
  )
}
