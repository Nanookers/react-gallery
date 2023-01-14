import Axios from 'axios';
import { Button } from '@material-ui/core';
import { useState, } from 'react';
import './ItemCard.css'

function ItemCard( {photo, getPhotos  } ) {

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
    switch (descriptionState){
        case false:    
            return (

                    <div className='cardWithButton'>
                            <div  key={photo.id} >
                                <div className = 'photo' 
                                    onClick={() => setDiscriptionState(!descriptionState)}>
                                        <img className="cardBody" id = {photo.id} src= {photo.path} />
                                </div>
                                
                               <Button variant="contained" 
                                    onClick={increaseLikes}
                                        id={photo.id} 
                                            style={{width: 200}}>
                                                {photo.likes === 0 ? "Like This Photo" : `Liked ${photo.likes} Times!`}    
                                </Button>
                            </div>   
                    </div>
                
            )
        case true:
            return (
                <div className='cardWithButton'>
                    <div className="cardBody" key = {photo.id}>    
                        <div onClick={() => setDiscriptionState(!descriptionState)}>
                                <p className='descriptionText'>{photo.description}</p>
                        </div>
                                
                               <Button variant="contained" 
                                    onClick={increaseLikes}
                                        id={photo.id} 
                                            style={{width: 200}}>
                                                {photo.likes === 0 ? "Like This Photo" : `Liked ${photo.likes} Times!`}    
                                </Button>
                    </div>                
            </div>

            )    
    }
}   

export default ItemCard;
