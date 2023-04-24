
import axios from "axios";


let hostUrl = process.env.REACT_APP_USER_API;

export const request = async (endPoint , setloading)  => {
      try {
            setloading(true)
            let response=await axios({
              url:hostUrl+endPoint,
              method:'GET',
            }) 
            
            setloading(false);
            return response.data
            
      } catch (error) {
            return error
      } 
       

      
};
