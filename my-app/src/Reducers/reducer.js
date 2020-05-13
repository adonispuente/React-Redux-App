import { GET_DOGGOS_START } from "../actions";

const initialState = {
  isFetching: false,
  doggos: null,
  error: "",
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGGOS_START:
      return {
        ...state,
        isFetching: true,
        doggos: action.payload,
      };

    default:
      return state;
  }
};
