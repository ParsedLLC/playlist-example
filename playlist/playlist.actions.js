import { searchPlaylists } from '../_shared/api/search-api.service';

export const setPlaylistData = referenceId => async dispatch => {
  dispatch(setPlaylistDataRequested());

  try {
    const features = await searchPlaylists(referenceId);
    const payload = features.data.videos;
    dispatch(setPlaylistDataFulfilled(payload));
  } catch (err) {
    dispatch(setPlaylistDataRejected(err));
  }
};

function setPlaylistDataRequested() {
  return {
    type: 'SET_PLAYLIST_DATA_REQUESTED',
  };
}

function setPlaylistDataFulfilled(payload) {
  return {
    type: 'SET_PLAYLIST_DATA_FULFILLED',
    payload,
  };
}

function setPlaylistDataRejected(error) {
  return {
    type: 'SET_PLAYLIST_DATA_REJECTED',
    payload: error,
  };
}
