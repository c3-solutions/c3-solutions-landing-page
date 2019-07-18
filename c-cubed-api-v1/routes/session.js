const express = require("express");
const router = express.Router();
const axios = require('axios');
const conf = require('../config.js')

router.get("/session/callback", async (req, res, next) => {
  const { query } = req;
  console.log('query: ', query);
  const { code } = query;

  if (!code) {
    return res.status(400).send({
      success: false,
      message: 'Error: no code'
    });
  }

  console.log('code: ', code);
  try {
    const response = await axios({
      method: 'post',
      url: 'https://github.com/login/oauth/access_token',
      headers: {'Accept': 'application/json'},
      params: {
        client_id: conf.client_id,
        client_secret: conf.client_secret,
        code: code
      },
      validateStatus: function (status) {
        return status < 600;
      }
    })
    console.log('access token: ', response.data.access_token);

     const response2 = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {'Authorization': `token ${response.data.access_token}`},
      validateStatus: function (status) {
        return status < 600;
      }
    });

    console.log('response: ', response2);

    res.status(200).json(response2.data);
  } catch (error) {
    console.log(error)
  }
});

router.get("/users", async (req, res, next) => {
  try {
    const response = await axios({
      method: 'get',
      url: 'https://api.github.com/user',
      headers: {'Authorization': `token ${'place token here'}`},
      validateStatus: function (status) {
        return status < 600;
      }
    });
    console.log('response: ', response);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;