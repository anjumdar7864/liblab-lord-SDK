var axios = require('axios');

async function getMovies(apiKey) {
    
    var config = {
        method: 'get',
        url: 'https://the-one-api.dev/v2/movie',
        headers: { 
          'Authorization': 'bearer '+apiKey
        }
      };
    
    var result;

      axios(config)
      .then((response) => { // If the GET request is successful, this block is executed
        return response; // The response of the API call is passed on to the next block
      })
      .then((movies) => { // In this block, we store the response data into a variable 'result'
        result = movies.data.docs;
        console.log(result);
      })
      .catch((err) => {
        console.log(err); // Error handler
      });
    return result; // The contest data is returned
  };

  async function getMoviesById(apiKey,id) {
    
    var config = {
        method: 'get',
        url: 'https://the-one-api.dev/v2/movie/'+id,
        headers: { 
          'Authorization': 'bearer '+apiKey
        }
      };
    
    var result;

      axios(config)
      .then((response) => { // If the GET request is successful, this block is executed
        return response; // The response of the API call is passed on to the next block
      })
      .then((movies) => { // In this block, we store the response data into a variable 'result'
        result = movies.data.docs;
      })
      .catch((err) => {
        console.log(err); // Error handler
      });
    return result; // The contest data is returned
  };

  async function getMoviesQuote(apiKey,id) {
    
    var config = {
        method: 'get',
        url: 'https://the-one-api.dev/v2/movie/'+id+'/quote',
        headers: { 
          'Authorization': 'bearer '+apiKey
        }
      };
    
    var result;

      axios(config)
      .then((response) => { // If the GET request is successful, this block is executed
        return response; // The response of the API call is passed on to the next block
      })
      .then((movies) => { // In this block, we store the response data into a variable 'result'
        result = movies.data.docs;
      })
      .catch((err) => {
        console.log(err); // Error handler
      });
    return result; // The contest data is returned
  };

  module.exports = {
    getMovies,
    getMoviesById,
    getMoviesQuote
 }