import Axios from 'axios';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './ItemCard.css'

function ItemCard( {photoList, getPhotos} ) {

    const [descriptionState, setDiscriptionState] = useState(false);

    // handle click on the like button.
    const increaseLikes = (event) =>{
        
        let id = event.currentTarget.id
        Axios.put(`/gallery/like/${id}`,
            {
                likes: 1
            }).then((response) => {
                getPhotos();
            }).catch(err => {
                console.log(err);
            });
    }

    // Return the 'card' with button attached to it.
   
    return (

            <div >
                {photoList.map(photo => (
                    
                    <div className="cardBody" key = {photo.id}>
                        
                        <p onClick={() => setDiscriptionState(!descriptionState)}>
                            {console.log(descriptionState)}
                            <img id = {photo.id} 
                                src= {photo.path} 
                                    style={{width: 200, height:200}} /></p>
                        
                       <p><Button variant="contained" 
                            onClick={increaseLikes}
                                id={photo.id} 
                                    style={{width: 200}}>
                                        {photo.likes === 0 ? "Like This Photo" : `Liked ${photo.likes} Times!`}    
                        </Button></p>
                       
                    </div>
                            
                ))}
            </div>
        
    )
}

export default ItemCard;
