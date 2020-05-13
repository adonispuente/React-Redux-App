import axios from "axios";

export const GET_DOGGOS_START = "GET_DOGGOS_START";
export const GET_DOGGOS_COMPLETE = "GET_DOGGOS_START";

export const getDoggos = () => {
  return (dispatch) => {
    dispatch({ type: GET_DOGGOS_START });
    // then make the async call
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        console.log(res.data.message);
        dispatch({ type: GET_DOGGOS_START, payload: res.data.message });
      })
      .catch((err) => console.log(err));
  };
};
