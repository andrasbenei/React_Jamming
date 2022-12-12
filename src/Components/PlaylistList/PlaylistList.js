import React from "react";
import './PlaylistList.css';
import PlaylistListItem from "../PlaylistListItem/PlaylistListItem";

class PlaylistList extends React.Component {

    render() {
        return (
            <div className="PlaylistList">
                <h2>Your playlists</h2>
                {
                    this.props.Playlists.map(playlist => {
                        return <PlaylistListItem playlist={playlist}
                        onselectPlaylist={this.props.onselectPlaylist}/>
                    })
                }
            </div>
        )
    }
}

export default PlaylistList;