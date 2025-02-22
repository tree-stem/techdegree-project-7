const Photo = (props) => {
    return (
        <li>
            <img {...props.data.map((item) => item.photo)} />
        </li>
    );
}

export default Photo;