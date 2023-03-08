import { Grid, ImageList, ImageListItem } from '@mui/material'
import './App.scss'
import ImageGrid from './containers/ImageGrid'
import SearchBar from './containers/SearchBar'

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <ImageGrid />
      
    </div>
  )
}

export default App
