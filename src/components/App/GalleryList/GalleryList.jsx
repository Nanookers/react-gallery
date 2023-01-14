import ItemCard from '../ItemCard/ItemCard';

function GalleryList( {photoList, getPhotos} ) {
    return (
        <>
        <div className='wrapper'>
            {
                photoList.map((photo) => {
                    return(
                        <ItemCard getPhotos={getPhotos} photo={photo} key={photo.id} />
                    )
                })
            }
        </div> 
        </>
    )
}

export default GalleryList;