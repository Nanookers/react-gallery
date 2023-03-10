import axios from 'axios';
import { Button, ButtonGroup } from '@material-ui/core';
import { useState, } from 'react';
import './ItemCard.css'

function ItemCard( {photo, getPhotos } ) {

    const [descriptionState, setDiscriptionState] = useState(false);



    // Click handler/PUT route
    const increaseLikes = (event) =>{

        // Create individual counter to send over, based on the previous photo.likes value. Adds one.
        let newCount = Number(photo.likes) + 1

        axios({
         method: 'PUT',
         url: `/gallery/likes/${event.currentTarget.id}`,
         data: {
            likes: newCount
         }
        }).then((response) => {
            getPhotos();
        }).catch((error) => {
         console.log('Error in PUT', error);
        })
     }

    const deletePost = (event) => {
        
        console.log(event.currentTarget.id);
        axios.delete(`/gallery/${event.currentTarget.id}`)
            .then(() => {
                getPhotos();
                    alert("Photo deleted!");
      });
    } 

    switch (descriptionState){
        case false:    
            return (

                    <div className='cardWithButton'>
                            <div  key={photo.id} >
                                <div className = 'photo' 
                                    onClick={() => setDiscriptionState(!descriptionState)}>
                                        <img className="cardBody" id = {photo.id} src= {photo.path} />
                                           
                                </div>

                                <ButtonGroup
                                    disableElevation
                                    variant="contained"
                                    aria-label="Disabled elevation buttons"
                                    
                                >
                                    <Button
                                        onClick={increaseLikes}
                                            id={photo.id} 
                                                style={{width: 200}}>
                                                    {photo.likes === 0 ? "Like This Photo" : `Liked ${photo.likes} Times!`}
                                    </Button>
                                    <Button 
                                        onClick={deletePost}
                                            id={photo.id} > Delete
                                    </Button>
                                </ButtonGroup>

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
                                
                               <ButtonGroup
                                    disableElevation
                                    variant="contained"
                                    aria-label="Disabled elevation buttons"
                                    
                                >
                                    <Button
                                        onClick={increaseLikes}
                                            id={photo.id} 
                                                style={{width: 200}}>
                                                    {photo.likes === 0 ? "Like This Photo" : `Liked ${photo.likes} Times!`}
                                    </Button>
                                    <Button 
                                        onClick={deletePost}
                                            id={photo.id} > Delete
                                    </Button>
                                </ButtonGroup>
                    </div>                
            </div>

            )    
    }
}   

export default ItemCard;
