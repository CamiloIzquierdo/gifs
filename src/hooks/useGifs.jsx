import { useContext, useEffect, useState } from "react";
import Context from "../context/GifsContext";
import { getGifs } from "../services/getGifs";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
    const { gifs, setGifs } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const keywordToUse = keyword || localStorage.getItem("lastKeyword");

    useEffect(
        function () {
            setLoading(true);
            getGifs({ keyword: keywordToUse }).then((gif) => {
                setGifs(gif);
                setLoading(false);
                if (keyword) {
                    localStorage.setItem("lastKeyword", keyword);
                }
            });
        },
        [keyword, setGifs, keywordToUse]
    );

    useEffect(
        function () {
            if (page === INITIAL_PAGE) return;
            setLoadingNextPage(true);
            getGifs({ keyword, keywordToUse, page }).then((nextGifs) => {
                setGifs((prevGifs) => prevGifs.concat(nextGifs));
                setLoadingNextPage(false);
            });
        },
        [page, keywordToUse, setGifs, keyword]
    );
    return { loading, loadingNextPage, gifs, setPage };
}
