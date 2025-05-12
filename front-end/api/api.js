import axios from 'axios';


// eslint-disable-next-line no-undef
const NODE_ENV = process.env;
const URL = NODE_ENV === 'development' ? 'http://localhost:3001/api': '/api';
// const URL = 'http://localhost:3001';

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;