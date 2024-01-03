#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const characters = movieData.characters;

    const fetchCharacters = (index) => {
      if (index >= characters.length) {
        return;
      }

      request(characters[index], (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
          fetchCharacters(index + 1);
        } else {
          console.error('Error fetching character:', charError);
        }
      });
    };

    fetchCharacters(0);
  } else {
    console.error('Error fetching movie:', error);
  }
});
