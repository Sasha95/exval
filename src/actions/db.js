import { date } from "../data/counters";
import { URLbanks } from "./config";
import axios from "axios";

export const getPersonalData = () => dispatch => {
  setTimeout(() => {
    console.log("I got data from server");
    dispatch({ type: "FETCH_DATA_FROM_SERVER_SUCCESS", payload: [1] });
  }, 2000);
};

export const getBanksOfCounter = counter => {
  return async dispatch => {
    const URL = URLbanks + "/api/banks/";
    const res = await axios.get(URL);
    // console.log(res);
    dispatch({ type: "COUNTERS_FETCH_SUCCESS", payload: res.data });
  };
};

export const getCounters = () => {
  return async dispatch => {
    const URL = "/api/banks/";
    const res = await fetch(URL);
    const rezult = await res.json();
    dispatch({ type: "COUNTERS_FETCH_SUCCESS", payload: rezult });
  };
};
