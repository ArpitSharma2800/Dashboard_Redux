const initState = {
  card1: 59,
  card2: 65,
  card3: 55,
  card4: 63,
  loading: true,
  error: "",
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST_DASHBOARD":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS_DASHBOARD_CARD1":
      return {
        ...state,
        loading: false,
          card1: state.card1 + 1,
          error: "",
      };
    case "FETCH_USERS_SUCCESS_DASHBOARD_CARD2":
      return {
        ...state,
        loading: false,
          card2: state.card2 + 1,
          error: "",
      };
    case "FETCH_USERS_SUCCESS_DASHBOARD_CARD3":
      return {
        ...state,
        loading: false,
          card3: state.card3 + 1,
          error: "",
      };
    case "FETCH_USERS_SUCCESS_DASHBOARD_CARD4":
      return {
        ...state,
        loading: false,
          card4: state.card4 + 1,
          error: "",
      };
    case "FETCH_USERS_NULL_DASHBOARD":
      return {
        ...state,
        loading: false,
          card1: 0,
          card2: 0,
          card3: 0,
          card4: 0,
      };
    default:
      return state;
  }
};

export default dashboardReducer;