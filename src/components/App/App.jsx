import React from 'react';
import Axios from 'axios';

import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../App/GalleryList/GalleryList';
import Header from '../App/Header/Header';


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
        alert('error getting shopping list');
        console.log(err);
      })
  }

    return (
      <div className="App">
        <Header />
        <GalleryList getPhotos={getPhotos} photoList={photoList}/>
      </div>
    );
}

export default App;
