import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // set variable to video data received from youtube
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { key: YOUTUBE_API_KEY, q: query },

    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
/* Use jQuery to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
 Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
 Accept an q string to search for
 Make sure all the tests for searchYouTube are passing. You can open the tests with npm test
Note: the API also accepts a query param of youtube_api_key with your youtube api key to get additional searches once our key reaches its daily limit. */


// search endpoint::
// https://app-hrsei-api.herokuapp.com/api/recastly/videos

