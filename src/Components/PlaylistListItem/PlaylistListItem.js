import React from "react";
import './PlaylistListItem.css';


class PlaylistListItem extends React.Component {
    render() {
        return (
            <div className="PlaylistListItem">
                <div className="PlaylistListItem-information">
                    <h3>{this.props.playlist.name}</h3>
                </div>
            </div>
        )
    }
}

export default PlaylistListItem;