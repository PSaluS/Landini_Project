import { cartI, requestParamI } from "../types";
import Config from "./config";

const getAllCartsRequest = async (setCarts: React.Dispatch<React.SetStateAction<cartI[] | undefined>>, setError: React.Dispatch<React.SetStateAction<string | undefined>>, setRequestParam: React.Dispatch<React.SetStateAction<requestParamI>>, page: number = 0) => {
    const skip = page*Config.apiRequestLimit;

    fetch(`https://dummyjson.com/carts?skip=${skip}&limit=${Config.apiRequestLimit}`)
      .then((res) =>res.json())
      .then((result) => {
        const buff = [];
        for(let i=0; i<Math.ceil(result.total / Config.apiRequestLimit); i++ )
        {
            buff.push(i+1);
        }
        const param = {
            skip: result.skip,
            total: result.total,
            limit: result.limit,
            pages: buff
        }
        if(result.skip >= 0 && result.total >= 0 && result.limit >= 0)
        {setRequestParam(param);
        setError(undefined);
        setCarts(result.carts);}
      })
      .catch(() =>
        setError('Carts API request fail!')
      );
      return [1,2,3];
}

export default getAllCartsRequest;