const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Berlin2021',
    database: 'mydatabase'
});

// API endpoints

app.get('/', (req, res) => {
    res.send('Funciona el back');
});

app.get('/tipos', (req, res) => {
    db.query('SELECT * FROM tipos', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/dispositivos', (req, res) => {
    db.query('SELECT dispositivos.*, tipos.descripcion AS tipo FROM dispositivos JOIN tipos ON dispositivos.id_tipo = tipos.id', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.post('/dispositivos', (req, res) => {
    const { nombre, precio, ubicacion, id_tipo } = req.body;
    db.query('INSERT INTO dispositivos (nombre, precio, ubicacion, id_tipo) VALUES (?, ?, ?, ?)', [nombre, precio, ubicacion, id_tipo], (error, results) => {
        if (error) throw error;
        res.json({ message: 'Device added', id: results.insertId });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});