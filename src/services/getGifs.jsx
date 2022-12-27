import { API_KEY } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
        const gifs = data.map((image) => {
            const { images, title, id } = image;
            const { url } = images.downsized_medium;
            return { title, id, url };
        });
        return gifs;
    }
    return [];
};
export const getGifs = ({ keyword = "morty", limit = 5, page = 0 }) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
        page * limit
    }&rating=g&lang=ens`;

    return fetch(apiURL).then((res) => res.json().then(fromApiResponseToGifs));
};
