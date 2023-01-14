import Axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import ItemCard from '../ItemCard/ItemCard';

function GalleryList( {photoList, getPhotos} ) {
    return (
        <>
            <p>Gallery goes hard</p>
            <ItemCard getPhotos={getPhotos} photoList={photoList}  />
            
        </>
    )
}

export default GalleryList;