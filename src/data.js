export const API_KEY = 'AIzaSyAH204rzytQhSq9JvI6ljp7DgY_n2Te4AM'

export const value_converter = (value) =>{
     if (value>=1000000) {
        return Math.floor(value/1000000)+"M";
     } else if(value>=1000){
        return Math.floor(value/1000)+"K"
     } else {
        return value;
     }
}