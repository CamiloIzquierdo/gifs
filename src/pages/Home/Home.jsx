import { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import SearchForm from "../../components/SearchForm";
import Spinner from "../../components/Spinner";
import TrendingSearches from "../../components/TrendingSearches/Trending";
import { useGifs } from "../../hooks/useGifs";
import { Helmet } from "react-helmet";

export default function Home({ gif }) {
    const [path, pushLocation] = useLocation();
    const { loading, gifs } = useGifs();
    const handleSubmit = useCallback(
        ({ keyword }) => {
            pushLocation(`/search/${keyword}`);
        },
        [pushLocation]
    );

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            {loading ? (
                <Spinner />
            ) : (
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>
                    <div className="App-category">
                        <TrendingSearches />
                    </div>
                </div>
            )}
        </>
    );
}
