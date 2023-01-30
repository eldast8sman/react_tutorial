import { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=6cf30ec1';

const App = () => {

    const searchMovies = async (title) => {
        const response =  await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Lord of the Rings');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value="Superman"
                    onChange={() => {}}
                />
                <img 
                    src={SearchIcon}
                    alt="search"
                />
            </div>
        </div>
    );
}

export default App;