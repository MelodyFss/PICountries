import axios from "axios";
import { GET_ALLCONTRIES, 
         GET_CONTRY_DETAIL, 
         GET_CONTRY_BY_NAME, 
         FILTER_BY_CONTINENTS,
         FILTER_BY_ACTIVITIES,
         GET_ALL_ACTIVITIES,
         ORDER_BY_NAME,
         ORDER_BY_POPULATION,
         } from "./actions-types";




         export function getAllCountries() {
          return async function (dispatch) {
              try {
                  var response = await axios.get('http://localhost:3001/countries/name?')
                  return dispatch({
                      type: GET_ALLCONTRIES,
                      payload: response.data
                  });
              } catch (error) {
                  console.log(error)
              }
          }
        }




export function getCountries() {
  return async function (dispatch) {
      try {
          var response = await axios.get('http://localhost:3001/countries')
      } catch (error) {
          console.log(error)
      }
  }
}

export function getActivities() {
    return async function (dispatch) {
        try {
            var response = await axios.get('http://localhost:3001/activities/name')
            const activities = response.data;
            return dispatch({
                type: GET_ALL_ACTIVITIES,
                payload: activities,
            });
        } catch (error) {
            console.log(error)
        }
    }
  }


  export function getCountryDetail(id) {
    return async function (dispatch) {
      try {
        var response = await axios.get(`http://localhost:3001/countries/id/${id}`);
        console.log(response.data)
        return dispatch({
          type: GET_CONTRY_DETAIL,
          payload: response.data
        });
      } catch (error) {
        console.log('tengo este error en country detail', error);
      }
    };
  }

  export function getCountryByName(name) {
    return async function (dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
            return dispatch({
                type: GET_CONTRY_BY_NAME,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
        }
    }
  }

  export const filterByContinents = (continents) => {
    return async function (dispatch) {
      try {
          var response = await axios.get(`http://localhost:3001/continents/name?name=${continents}`);
          return dispatch({
              type: FILTER_BY_CONTINENTS,
              payload: response.data
          });
      } catch (error) {
          console.log(error)
      }
  }
  }
   export const filterByActivities = (selectedActivity) => {
    return async function (dispatch) {
      try {
          var response = await axios.get(`http://localhost:3001/Activities/name?name=${selectedActivity}`);
          return dispatch({
              type: FILTER_BY_ACTIVITIES,
              payload: response.data
          });
      } catch (error) {
          console.log(error)
      }
  }   
   
    }

    export const orderByName = (orderBy) => {
        return {
          type: ORDER_BY_NAME,
          payload :orderBy,
        };
      };

    export const orderByPopulation = (orderByN) => {
        return {
          type: ORDER_BY_POPULATION,
          payload :orderByN,
        };
      };
