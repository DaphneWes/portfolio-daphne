const portfolioInfo = () => {
    const projects = [
        {
            id: 0,
            name: "Travel App",
            info: "A frontend react app for a travel website.",
            img: "/portfolio-daphne/images/TravelApp.png",
            link: "https://daphnewes.github.io/Travel/"
        },
        {
            id: 1,
            name: "Weather App",
            info: "A Weather App using the Open Weather Map and GeoDB Cities APIs.",
            img: "/portfolio-daphne/images/WeatherApp.png",
            link: "https://daphnewes.github.io/react-weather-app/"
        },
        {
            id: 2,
            name: "Movie Library App",
            info: "An IMDB parody app using the IMDb rapid API.",
            img: "/portfolio-daphne/images/MovieLibraryApp.png",
            link: "https://daphnewes.github.io/movie-library/"
        }
        ,
        {
            id: 3,
            name: "Popquiz App",
            info: "A Popquiz app using the spotify API. Hover over the video and it will play. The app is still in spotify development mode and can therefore not be published and used in github pages ",
            video: "/portfolio-daphne/images/Popquiz-app.mp4"
        }
    ]
    
    return projects
};

export default portfolioInfo;