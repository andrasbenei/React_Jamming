import React from "react";
import './PlaylistList.css';
import Spotify from "../../util/Spotify";
import PlaylistListItem from "../PlaylistListItem/PlaylistListItem";

class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Playlists : []
        }
    }

    componentDidMount() {
        Spotify.getUserPlaylists().then(Playlists => {
            this.setState({Playlists: Playlists})
        })
    }

    render() {
        return (
            <div className="PlaylistList">
                <h2>Playlists</h2>
                {/* <PlaylistListItem Playlists={this.state.Playlists}/> */}
                {
                    this.state.Playlists.map(playlist => {
                        return <PlaylistListItem playlist={playlist}/>
                    })
                }
            </div>
        )
    }
}

export default PlaylistList;