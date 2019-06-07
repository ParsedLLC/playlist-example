const initialState = {
  playlist: [],
  isVideo: false,
  error: '',
  loading: false,
};

export const playlist = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLAYLIST_DATA_REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'SET_PLAYLIST_DATA_FULFILLED':
      return {
        ...state,
        loading: false,
        playlist: action.payload,
        isVideo: action.payload.length ? action.payload[0].tags.includes('video') : false,
      };
    case 'SET_PLAYLIST_DATA_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
