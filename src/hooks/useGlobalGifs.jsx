import { useContext } from "react";
import Context from "../context/GifsContext";

export default function useGlobalGifs() {
    const { gifs } = useContext(Context);
    return gifs;
}
