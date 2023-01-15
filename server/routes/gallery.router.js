const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE


router.put('/likes/id', ( req, res ) => {
    let idToUpdate = req.params.id;
    let likeStatus =  req.body.likes
    
    likeStatus += 1;

    let sqlQuery =`
        UPDATE "react_gallery"
            SET "likes" = $1
            WHERE "id" = $2
    `

    let sqlValues = [likeStatus, idToUpdate]
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('successful update from PUT Serverside');
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke in PUT serverside', dbErr);
        res.sendStatus(500)
    })
})


// GET Route
router.get('/', (req, res) => {
    const sqlText = `
      SELECT * FROM react_gallery
        ORDER BY id;
    `;
  
    pool.query(sqlText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log('GET /react_gallery:', error);
        res.sendStatus(500);
      })
  }) // END GET Route

module.exports = router;