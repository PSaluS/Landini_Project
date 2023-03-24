import DeleteCart from '../../../API/deleteCart';
import { cartI } from '../../../types';
import DetailButton from '../../atoms/buttons/detailButton';
import RemoveButton from '../../atoms/buttons/removeButton';
import CartDiv from '../../atoms/carts/cartDiv';

interface CartComponentI {
  element: cartI;
  carts: cartI[];
  setCarts: React.Dispatch<React.SetStateAction<cartI[] | undefined>>;
  setSelect: React.Dispatch<React.SetStateAction<cartI | undefined>>;
  setApiError: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Cart = ({
  element,
  carts,
  setCarts,
  setSelect,
  setApiError,
}: CartComponentI) => {
  const deleteLocalCart = (id: number) => {
    if (carts) setCarts(carts.filter((cart) => cart.id !== id));
  };

  return (
    <CartDiv key={element.id}>
      Cart: {element.id}
      <DetailButton onClick={() => setSelect(element)}>Details</DetailButton>
      <RemoveButton
        onClick={() => {
          DeleteCart(element.id, setApiError, deleteLocalCart);
        }}
      >
        Remove Cart
      </RemoveButton>
    </CartDiv>
  );
};

export default Cart;
