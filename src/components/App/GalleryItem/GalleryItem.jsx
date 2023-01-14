import Axios from 'axios';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import './GalleryItem.css'
import ItemCard from '../ItemCard/ItemCard';




function GalleryItem( {photoList, getPhotos} ) {

    const [descriptionState, setDiscriptionState] = useState(false);

    // handle click on the like button.
    

    const descriptionClick = () => {
        setDiscriptionState(!descriptionState)
        console.log(descriptionState);
    }

    // Return the 'card' with button attached to it.
   
    return (
        <ItemCard photoList ={photoList} 
            getPhotos={getPhotos} />
    )
}

export default GalleryItem;