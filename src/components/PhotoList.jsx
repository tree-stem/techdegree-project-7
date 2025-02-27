import Photo from './Photo';

const PhotoList = (props) => {
    return (
        <div className="photo-container">
            <h2>{props.pageTitle}</h2>
            <ul>
                {/* Map over photo array and create a Photo component for each item */}
                {props.data.map(item =>
                    <Photo server={item.server} id={item.id} secret={item.secret} key={item.id.toString()} />
                )}
            </ul>
        </div>
    )
};

export default PhotoList;