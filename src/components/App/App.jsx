import React from 'react';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import GalleryList from '../App/GalleryList/GalleryList';
import Header from '../App/Header/Header';
import GalleryItem from './GalleryItem/GalleryItem';

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
      <div className='wrapper'>
        <GalleryList photoList={photoList}/>
        </div>
      </div>
    );
}

export default App;
