const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');

app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "us-cdbr-east-06.cleardb.net",
  user: "bfe6459e299905",
  password: "eab9cc61",
  database: "heroku_39fe4aac1e96a98"
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api/heroes', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      res.status(500).json({ error: 'Failed to get database connection' });
      return;
    }

    connection.query("SELECT * FROM heroes", (error, results, fields) => {
      connection.release();

      if (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Failed to execute database query' });
        return;
      }

      res.json(results);
    });
  });
});

app.post('/api/heroes', (req, res) => {
  const { id, nombre, rol, url, hp } = req.body;
  const sql = `INSERT INTO heroes (id, nombre, rol, url, hp) VALUES (?, ?, ?, ?, ?)`;
  const values = [id, nombre, rol, url, hp];

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      res.status(500).json({ error: 'Failed to get database connection' });
      return;
    }

    connection.query(sql, values, (error, results, fields) => {
      connection.release();

      if (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Failed to execute database query' });
        return;
      }

      res.json({ message: 'El Heroe se ha agregado con exito' });
    });
  });
});

app.delete('/api/heroes/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM heroes WHERE id = ${id}`;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      res.status(500).json({ error: 'Failed to get database connection' });
      return;
    }

    connection.query(sql, (error, result) => {
      connection.release();

      if (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ error: 'Failed to execute database query' });
        return;
      }

      console.log(`Deleted ${result.affectedRows} row(s)`);
      res.send(`El heroe con el id: ${id} ha sido eliminado`);
    });
  });
});

app.put('/api/heroes/:id', (req, res) => {
  const { hp } = req.body;
  const { id } = req.params;
  const query = `UPDATE heroes SET hp=${hp} WHERE id=${id}`;

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      res.status(500).json({ error: 'Failed to get database connection' });
      return;
      }connection.query(query, (error, result) => {
        connection.release();
      
        if (error) {
          console.error('Error executing database query:', error);
          res.status(500).json({ error: 'Failed to execute database query' });
          return;
        }
      
        res.send(`Product with id ${id} has been updated`);
      });
    });
  });
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    });
    
    app.listen(PORT, () => {
    console.log('Server listening on ${PORT}');
    });
