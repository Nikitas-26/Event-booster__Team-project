import axios from 'axios';
// import templates from '../templates/markup.hbs';
// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';

// export default async function fetchImages(event, country) {
//   try {
//     const fetch = await axios.get(
//       `${BASE_URL}/events.json?keyword=${event}&apikey=${API_KEY}&countryCode=${country}&page=1&size=20`,
//     );
//     const data = fetch.data;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// }
export default function fetchImages(event, country) {
  const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
  const API_KEY = 'bdHFOjAkpUBvne7gzKAkA6SZNtgLzUV4';

  const url = `${BASE_URL}/events.json?keyword=${event}&apikey=${API_KEY}`;
  return fetch(url).then(response => response.json());
}

// &countryCode=${country}