const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjljODJlODU3MWZkMWZkMzc3ZTBmZDRlZmIyODlmMyIsInN1YiI6IjY1MmY1OGJmYTgwMjM2MDEzNzY4YjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Awo6M01WgSRBmpdigE4KA2fip55k3C-KgB8B7CL7Qg'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));