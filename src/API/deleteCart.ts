
const DeleteCart = async (id: number, setError: React.Dispatch<React.SetStateAction<string | undefined>>, localDelete: (id: number) => void) => {
    setError(undefined);
    fetch(`https://dummyjson.com/carts/${id}`, {
        method: 'DELETE',
      })
      .then(res => res.json())
      .catch(() => {
          setError('Carts API delete cart fail!');
      })
      .then((result) => {
        if(result.isDeleted)
         localDelete(result.id);
         else
         setError('Carts API delete cart fail!')
        })
};

export default DeleteCart;