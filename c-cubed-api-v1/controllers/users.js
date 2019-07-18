const axios = require('axios');

module.exports = {
  async get (req, res, next) {
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
  }
};