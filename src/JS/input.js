// import axios from 'axios';
export default function fetchImages(event, country,page) {
  const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
  const API_KEY = 'bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4';
  const url = `${BASE_URL}/events.json?keyword=${event}&apikey=${API_KEY}&countryCode=${country}&page=${page}`;
  return fetch(url).then(response => response.json());
}


