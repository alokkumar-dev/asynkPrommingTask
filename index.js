    var images = [
        ["https://i.ytimg.com/vi/BGzMgxMzUS8/maxresdefault.jpg"],
        ["https://m.media-amazon.com/images/I/51c9oj5z7zL.jpg"],
        ["https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/10/03/654769-bagbanl.jpg"],
        ["https://www.meinstyn.com/wp-content/uploads/2020/04/Baaghi-2-Movie-Dialogues-Quotes-HD-Poster-Tiger-Shroff-Disha-Patani-678x381.jpg"]
    ];

    let id;
    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("class", "slider")
    document.querySelector(".container").append(imgdiv);


    var img = document.createElement("img");

    imgdiv.append(img);
    let i = 0;
    setInterval(function () {
        if (i == images.length) {
            i = 0;
        }

        img.src = images[i];
        i++;
    }, 2000);
    // console.log(images[0]);




    var moviesArr = [

        {
            name: "mirzapur",
            date: "26/01/2022",
            poster: "https://m.media-amazon.com/images/I/51c9oj5z7zL.jpg",
            rating: "4.9"
        },
        {
            name: "dum",
            date: "27/01/2022",
            poster: "https://i.ytimg.com/vi/BGzMgxMzUS8/maxresdefault.jpg",
            rating: "1.7"
        },
        {
            name: "jaybhavani",
            date: "27/02/2022",
            poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_UY209_CR13,0,140,209_AL_.jpg",
            rating: "2.6"
        },
        {
            name: "baghban",
            date: "26/01/2022",
            poster: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2020/10/03/654769-bagbanl.jpg",
            rating: "3.6"
        },
        {
            name: "aashram",
            date: "27/01/2022",
            poster: "https://filmfare.wwmindia.com/content/2021/jun/web-series-aashram-11624453311.jpg",
            rating: "4.8"
        },
        {
            name: "shaadi_men_zroor_aana",
            date: "27/02/2022",
            poster: "https://m.media-amazon.com/images/M/MV5BODFkMDRjMWQtNDllMC00NjMwLWFlYzQtMWY5YWFkM2Y1NzhlXkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_.jpg",
            rating: "5.0"
        },
        {
            name: "valerian",
            date: "26/01/2022",
            poster: "https://i1.wp.com/globalzonetoday.com/wp-content/uploads/2020/10/Valerian-And-The-City-Of-A-Thousand-Planets.jpg",
            rating: "3.9"
        },
        {
            name: "baghi",
            date: "27/01/2022",
            poster: "https://www.meinstyn.com/wp-content/uploads/2020/04/Baaghi-2-Movie-Dialogues-Quotes-HD-Poster-Tiger-Shroff-Disha-Patani-678x381.jpg",
            rating: "4.1"
        },
        {
            name: "black_widown",
            date: "27/02/2022",
            poster: "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg",
            rating: "3.9"
        },

    ];

    localStorage.setItem("moviesDB", JSON.stringify(moviesArr));

    var getMoviData = JSON.parse(localStorage.getItem("moviesDB")) || [];
    displayMovies(getMoviData);

    function displayMovies(getMoviData) {
        getMoviData.map(function (event) {

            var moviDiv = document.createElement("div");
            moviDiv.setAttribute("class", "moviDiv")
            var descDiv = document.createElement("div");
            descDiv.setAttribute("class", "descDiv");
            var img = document.createElement("img");
            var name = document.createElement("h3");
            var releaseDate = document.createElement("h4");
            var rating = document.createElement("h4");

            img.setAttribute("src", event.poster);
            name.textContent = "Name :  " + event.name;
            releaseDate.textContent = " Date : " + event.date;
            rating.textContent = "Rating : " + event.rating;

            descDiv.append(name, releaseDate, rating)

            moviDiv.append(img, descDiv);

            document.querySelector(".moviArea").append(moviDiv);


        });
    }

    // Filter and short Part Start here....


    function lowToHigh() {
        document.querySelector(".moviArea").innerHTML = "";
        getMoviData.sort(function (a, b) {
            return Number(a.rating) - Number(b.rating);
        })
        displayMovies(getMoviData);
    }
    function highToLow() {
        document.querySelector(".moviArea").innerHTML = "";
        getMoviData.sort(function (a, b) {
            return Number(b.rating) - Number(a.rating);
        })
        displayMovies(getMoviData);
    }
    
    function filterByChar() {
        document.querySelector(".moviArea").innerHTML = "";
        getMoviData.sort(function (a, b) {
            if(a.name > b.name){
                return 1;
            }
            if(a.name < b.name){
                return -1;
            }
            return 0;
        })
        displayMovies(getMoviData);
    }
    
    


    // Filter and short Part End here....
