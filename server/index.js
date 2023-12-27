require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const merchant_model = require('./merchant_model')
const PORT = process.env.PORT || 5000;
const app = express()
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
  });


/*const start = async () => {
    try {
        app.listen(PORT, () => console.log( `Server started on PORT = ${PORT}`))
        app.get('/', (req, res) => {
            res.status(200).send('Hello World!');
          })
        

    } catch (e) {
        console.log(e);
    }
}
start()
*/
app.get('/', (req, res) => {
    merchant_model.getMerchants()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.post('/merchants', (req, res) => {
    merchant_model.createMerchant(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  
  app.delete('/merchants/:id', (req, res) => {
    merchant_model.deleteMerchant(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })
  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }
  const createMerchant = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, email } = body
      pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteMerchant = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`Merchant deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getMerchants,
    createMerchant,
    deleteMerchant,
  }