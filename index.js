const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjljODJlODU3MWZkMWZkMzc3ZTBmZDRlZmIyODlmMyIsInN1YiI6IjY1MmY1OGJmYTgwMjM2MDEzNzY4YjI2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Awo6M01WgSRBmpdigE4KA2fip55k3C-KgB8B7CL7Qg'
    }
  };
  // fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch(err => console.error(err)); // 콘솔에서 보기위해 써둠

  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then((response) => response.json())
    .then((data) => {
      const $movieCardList = document.querySelector(".cardList");
        data.results.forEach((movie) => {
        const $movieCard = document.createElement("div");
        $movieCard.className = "movie-card";
        $movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.overview}</p>
          <p>ratin : ${movie.vote_average}</p>`;

      $movieCardList.appendChild($movieCard);

      $movieCard.addEventListener("click", function(){
        alert(`영화 id : ${movie.id}`)
      })
      });

    })
    .catch(err => console.error(err));

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then((response) => response.json())
    .then((data) => {
      const $movieCardList = document.querySelector(".cardList");
      const input = document.querySelector(".movieSearch");

      document.getElementById("searchBtn").addEventListener("click", function(){
        const newArray = data.results.filter((movie) => {

          console.log(movie.title.includes(input.value),movie.title,input.value);
          return movie.title.toUpperCase().includes(input.value.toUpperCase())
        })

          $movieCardList.replaceChildren();

          newArray.forEach((movie) => {
          const $movieCard = document.createElement("div");
          $movieCard.className = "movie-card";
          $movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>${movie.overview}</p>
            <p>ratin : ${movie.vote_average}</p>`;

        $movieCardList.appendChild($movieCard);
        

        })
      });

      ;
    })
    .catch(err => console.error(err));