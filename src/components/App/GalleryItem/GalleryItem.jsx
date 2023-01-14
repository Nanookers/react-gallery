import { Button } from '@material-ui/core';
import './GalleryItem.css'



function GalleryItem( {photoList} ) {
    return (
        <div className="card">
            <div className="cardBody">
                {photoList.map(photo => (
                    <div key = {photo.id}>
                        <img src= {photo.path} 
                            style={{width: 200,  
                            height:200}}/>

                        <Button variant="contained" 
                                key={photo.id} 
                                    style={{width: 200}}>Contained
                        </Button>
                    </div>
                            
                ))}
            </div>
        </div>
    )
}

export default GalleryItem;