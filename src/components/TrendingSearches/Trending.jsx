import { useEffect, useState } from "react";
import Category from "../Category";
import getTrendingTerms from "../../services/getTrendingTermsService";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([]);

    useEffect(function () {
        getTrendingTerms().then(setTrends);
    }, []);

    return <Category name="Tendencias" options={trends} />;
}
