import Photo from "./Photo";
import App from "../App";

const PhotoList = (props) => {
    return (
        <div className="photo-container">
            <h2>{props.title}</h2>
            <ul>
                <Photo photos={props.data}/>
                <li className="not-found">
                    <h3>No Results Found</h3>
                    <p>You search did not return any results. Please try again.</p>
                </li>
                <App />
            </ul>
        </div>
    );
};

export default PhotoList;