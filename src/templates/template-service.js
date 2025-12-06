import { capitalizeString } from "../helpers/capitalize.js";

export const templateService = (name) => {
  return `import axios, { AxiosError } from "axios";
    
        export const get${capitalizeString(name)} = async()=>{
            try {
                const response = await axios.get("http://localhost:3000/api/v1/${name}");
                return response.data;
            } catch (error) {
                if(error instanceof AxiosError)
                     console.log(error);
            }
        }
        export const post${capitalizeString(name)} = async()=>{
            try {
                const response = await axios.post("http://localhost:3000/api/v1/${name}");
                return response.data;
            } catch (error) {
                if(error instanceof AxiosError)
                     console.log(error);
            }
        }
        export const put${capitalizeString(name)} = async()=>{
            try {
                const response = await axios.put("http://localhost:3000/api/v1/${name}");
                return response.data;
            } catch (error) {
                if(error instanceof AxiosError)
                     console.log(error);
            }
        }
        export const delete${capitalizeString(name)} = async()=>{
            try {
                const response = await axios.delete("http://localhost:3000/api/v1/${name}");
                return response.data;
            } catch (error) {
                if(error instanceof AxiosError)
                     console.log(error);
            }
        }
    `;
};
