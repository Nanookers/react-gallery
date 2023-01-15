import React from 'react';
import Axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from '../App/Header/Header';
import GalleryList from '../App/GalleryList/GalleryList';
import SubmissionForm from '../SubmissionForm/SubmissionForm';


function App() {

  let [photoList, setPhotoList] = useState([])

  useEffect(() => {
    getPhotos()
  }, [])

  const getPhotos  = () => {
    Axios.get('/gallery')
      .then(response => {
        console.log(response.data);
        setPhotoList(response.data)
      }).catch(err => {
        alert('error getting photoGallery');
        console.log(err);
      })
  }

    return (
      <div className="App">
        <Header />
        <SubmissionForm getPhotos={getPhotos}/>
        <GalleryList getPhotos={getPhotos} photoList={photoList}/>
      </div>
    );
}

export default App;
