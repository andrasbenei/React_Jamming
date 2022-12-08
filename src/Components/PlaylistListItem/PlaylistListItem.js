import React from "react";
import './PlaylistListItem.css';


class PlaylistListItem extends React.Component {
    constructor(props) {
        super(props);
        this.selectPlaylist = this.selectPlaylist.bind(this)
    }

    selectPlaylist() {
        this.props.onselectPlaylist(this.props.playlist)
    }

    render() {
        return (
            <div className="PlaylistListItem">
                <div className="PlaylistListItem-information">
                    <h3>{this.props.playlist.name}</h3>
                </div>
                <button className="PlaylistListItem-action" onClick={this.selectPlaylist}>+</button>
            </div>
        )
    }
}

export default PlaylistListItem;