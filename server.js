const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 2410;

const app = express();

app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(PORT, () => console.log(`Listening on port http://localhost:${PORT}`));



app.post('/myserver', async (req, res) => {
  let { method, fetchURL, data } = req.body;
  let response;
  try {
    if (method === 'GET') {
      response = await axios.get(`${fetchURL}`);
      return res.send(response.data);
    } else {
      let obj = JSON.parse(data);
      response = await axios.post(`${fetchURL}`, obj);
      return res.send(response.data)
    }
  } catch (error) {
    return res.status(401).send({ message: error.message })
  }
})
