const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM alternants', (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
});

router.post('/', (req, res) => {
    const { nom, prenom } = req.body;
    db.query('INSERT INTO alternants (nom, prenom) VALUES (?, ?)', [nom, prenom], (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ id: results.insertId, nom, prenom });
        }
    });
});

module.exports = router;
