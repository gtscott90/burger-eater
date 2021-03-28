const express = require('express');
const router = express.Router()

const burger = require('../models/burger.js');


router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  // creating new burger... sends data to the DB
  router.post('/api/burgers', (req, res) => {
    burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

  // updates the status of a burger to devoured
  router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.update(
      {
        devoured: true,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

  router.delete('/api/cats/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    cat.delete(condition, (result) => {
      if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

  module.exports = router;