const initialState = {
  species: [],
  loading: false,
  error: null,
};

const speciesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_SPECIES_SUCCESS':
      return { ...state, species: action.payload, loading: false, error: null };
    case 'FETCH_SPECIES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    // Other cases for people actions
    default:
      return state;
  }
};

export default speciesReducer;
