import { GET_ALLCONTRIES , 
    GET_CONTRY_DETAIL, 
    GET_CONTRY_BY_NAME, 
    FILTER_BY_CONTINENTS,
    FILTER_BY_ACTIVITIES,
    GET_ALL_ACTIVITIES,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION} from "./actions-types";

const initialState = {
AllCountries: [],
AllActivities: [],
CountryDetail: [],
filteredCountries: null
};

const reducer = (state = initialState, action) => {
switch (action.type) {
case GET_ALLCONTRIES:
 return {
   ...state,
   AllCountries: action.payload
 };

case GET_ALL_ACTIVITIES:
 return {
     ...state,
     AllActivities: action.payload
   };

case GET_CONTRY_DETAIL:
 return {
   ...state,
   CountryDetail: action.payload
 };

case GET_CONTRY_BY_NAME:
   return {
     ...state,
     AllCountries: action.payload,
     filteredCountries : action.payload
   };

case FILTER_BY_CONTINENTS:

   return {
     ...state,
     filteredCountries: action.payload
   };

case FILTER_BY_ACTIVITIES:
  const selectedActivity = action.payload;
  console.log("selectedActivity",selectedActivity)
  if (selectedActivity === 'All') {
    return {
      ...state,
      filteredCountries: null
    };
  }else{

    return {
      ...state,
      filteredCountries: selectedActivity
    };
  }
  
  case ORDER_BY_NAME:
  const orderBy = action.payload;
  if (orderBy === 'All') {
    return {
      ...state,
      filteredCountries: null
    };
  }

  if (orderBy === 'OrderAZ') {
    const countriesByNameAsc = [...state.AllCountries].sort(function(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
    return {
      ...state,
      filteredCountries: countriesByNameAsc
    };
  }

  if (orderBy === 'OrderZA') {
    const countriesByNameDes = [...state.AllCountries].sort(function(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      return 0;
    });
    return {
      ...state,
      filteredCountries: countriesByNameDes
    };
  }

  return state; 


 case ORDER_BY_POPULATION:
 const orderByN = action.payload;
     if (orderByN === 'All') {
       return {
         ...state,
         filteredCountries: null
       };
     } 

 if (orderByN === 'Minortomajor') {
  const MinorToMajor = [...state.AllCountries].sort(function(a, b){
   return a.population - b.population; })
   
   return {
   ...state,
   filteredCountries: MinorToMajor
   };
 }

 if (orderByN === 'MajortoMinor') {
   const MajorToMinor = [...state.AllCountries].sort(function(a, b){
     return b.population - a.population ; })
     
     return {
     ...state,
     filteredCountries: MajorToMinor
     };
 }
 break;

 default:
 return {
   ...state
 };
}
};

export default reducer;