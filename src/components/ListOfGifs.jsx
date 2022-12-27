import Gif from "./Gif";
import "./ListOfGifs.css";

export default function ListOfGifs({ gifs }) {
    return (
        <div className="ListOfGifs">
            {gifs.map(({ id, title, url }, index) => (
                <Gif id={id} key={index} title={title} url={url} />
            ))}
        </div>
    );
}
