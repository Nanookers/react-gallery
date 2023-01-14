import Axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( {photoList} ) {
    return (
        <>
            <p>Gallery goes hard</p>
            <GalleryItem photoList={photoList}  />
            
        </>
    )
}

export default GalleryList;