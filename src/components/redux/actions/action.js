const ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT;

export const getProducts = () => async (dispatch) => {
  try {
    const data = await fetch(`${ENDPOINT}/getproducts`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const res = await data.json();

    console.log(res);
    dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res });
  } catch (error) {
    dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.responce });
  }
};
