import React from 'react';

const ListItem = ({video,onUserSelected}) => {

    //The videos thumbnails
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
    <li onClick={() => onUserSelected(video)}>
        <div >
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <div>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default ListItem;