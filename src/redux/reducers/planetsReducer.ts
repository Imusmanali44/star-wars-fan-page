const initialState = {
  planet: [],
  loading: false,
  error: null,
};

const planetsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_PLANET_SUCCESS':
      return { ...state, planets: action.payload, loading: false, error: null };
    case 'FETCH_PLANET_FAILURE':
      return { ...state, loading: false, error: action.payload };
    // Other cases for people actions
    default:
      return state;
  }
};

export default planetsReducer;
