import { cartI } from "../types";

const AddCart = (setError: React.Dispatch<React.SetStateAction<string | undefined>>, addLocal: (cart: cartI) => void) => {
    fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 1,
        quantity: 1,
      },
      {
        id: 50,
        quantity: 2,
      },
    ]
  })
})
.then(res => res.json())
.then((result)=>
    addLocal(result))
.catch(()=>setError('Carts API add cart fail!'))
}

export default AddCart;