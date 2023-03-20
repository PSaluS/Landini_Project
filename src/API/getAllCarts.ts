import { cartI, requestParamI } from "../types";

// Request for all catys
const getAllCartsRequest = async (setCarts: React.Dispatch<React.SetStateAction<cartI[] | undefined>>, setError: React.Dispatch<React.SetStateAction<string | undefined>>, setRequestParam: React.Dispatch<React.SetStateAction<requestParamI>>, page: number = 0) => {
    const skip = page*20;

    fetch(`https://dummyjson.com/carts?skip=${skip}`)
      .then((res) =>res.json())
      .then((result) => {
        const buff = [];
        for(let i=0; i<(result.total / result.limit); i++ )
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
        setRequestParam(param);
        setError(undefined);
        setCarts(result.carts);
      })
      .catch((err) => {
        if (err) setError('Carts API request fail!');
      });
      return [1,2,3];
}

export default getAllCartsRequest;