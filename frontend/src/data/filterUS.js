import allUniversities from './worlduniversities.json';


const usUniversities = allUniversities.filter(
  university => university.country === "United States"
);


export default usUniversities;