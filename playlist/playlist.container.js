import { connect } from 'react-redux';
import { Playlist as PlaylistComponent } from './playlist.component';
import { setPlaylistData } from './playlist.actions';
import { setCurrentTrack, playVideo } from '../player/player.actions';

function mapStateToProps(state) {
  return {
    ...state.playlist,
    playerReducer: { ...state.playerReducer },
  };
}

export const Playlist = connect(
  mapStateToProps,
  { setPlaylistData, setCurrentTrack, playVideo }
)(PlaylistComponent);
