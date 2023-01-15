import {useState} from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function SubmissionForm({getPhotos}) {
    let [photoInput, setPhotoInput] = useState('');
    let [descriptionInput, setDescriptionInput] = useState('');

    const addPhoto = () => {
        axios.post('/gallery',
          {
            path: photoInput,
            description: descriptionInput,
            likes: 0
          }
        ).then(response => {
          getPhotos();
          console.log('response:', response)
        }).catch(error => {
          console.log('Error in POST client', error)
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPhoto();
        console.log('photo submit!');
    }

    return (
        <>
            <h1> Add A Photo </h1>
            
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" 
                    className='urlButton'
                        label="Photo URL" 
                            variant="standard" 
                                value={photoInput}
                                    onChange={(event) => setPhotoInput(event.target.value)}/>
                
                <TextField id="standard-basic" 
                    className='desButton'
                        label="Description" 
                            variant="standard" 
                                value={descriptionInput}
                                    onChange={(event) => setDescriptionInput(event.target.value)}/>
                
                <Button variant="contained"  type="submit" >Submit</Button>          
            </form>
        </>
    )

}

export default SubmissionForm;