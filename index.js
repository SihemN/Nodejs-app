require('dotenv').config()

const name = process.env.My_NAME;
const city = process.env.My_CITY;
const language = process.env.My_LANGUAGE;


console.log(`I am ${name}, wilder in ${city}, an I love ${language}.`);