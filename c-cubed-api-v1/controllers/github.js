const axios = require('axios');
const conf = require('../config.js');

module.exports = {
  async getMembers(req, res, next) {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.github.com/orgs/c3-solutions/members',
        headers: {'Authorization': `token ${conf.PAT}`}
      });
      console.log('response: ', response.data);
      res.status(200).json(response.data)
    } catch (error) {
      console.log(error);
    }
  }
};