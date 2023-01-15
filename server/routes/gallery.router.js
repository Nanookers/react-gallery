const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/likes/:id', ( req, res ) => {

    let idToUpdate = req.params.id;
    let likeStatus =  Number(req.body.likes)
    
    
    let sqlQuery =`
        UPDATE "react_gallery"
            SET "likes" = $1
            WHERE "id" = $2
    `

    let sqlValues = [likeStatus, idToUpdate]
    pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
        console.log('Serveside PUT', dbRes);
        res.sendStatus(201)
    }).catch(( dbErr)=>{
        console.log('broke PUT DB', dbErr);
        res.sendStatus(500)
    })
})

// POST
router.post("/", (req, res) => {
    const newPhoto = req.body;
    
    const sqlQuery = `
      INSERT INTO "react_gallery" ("path", "description", "likes")
        VALUES ($1, $2, $3);
    `;
  
    pool.query(sqlQuery, [newPhoto.path, newPhoto.description, newPhoto.likes])
      .then((result) => {
        console.log("Item added to the database:", newPhoto);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log("Error in POST server:", error);
        res.sendStatus(500);
      });
  });


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


router.delete("/:id", (req, res) => {
    console.log(req.params);
    let idToDelete = req.params.id;
    let sqlQuery = `
              DELETE FROM "react_gallery"
                WHERE "id"=$1
            `;
    let sqlValues = [idToDelete];
    pool.query(sqlQuery, sqlValues)
      .then((dbRes) => {
        res.sendStatus(200);
      })
      .catch((dbErr) => {
        console.log("broke in Delete route", dbErr);
      });
  });

module.exports = router;