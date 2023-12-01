const initialState = {
  people: [],
  loading: false,
  error: null,
};

const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_PEOPLE_SUCCESS':
      return { ...state, people: action.payload, loading: false, error: null };
    case 'FETCH_PEOPLE_FAILURE':
      return { ...state, loading: false, error: action.payload };
    // Other cases for people actions
    default:
      return state;
  }
};

export default peopleReducer;
