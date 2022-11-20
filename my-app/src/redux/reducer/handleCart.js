const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exits = state.find((s) => s.id == product.id);
      if (exits) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DELITEM":
      const exits1 = state.find((s) => s.id === product.id);
      if (exits1.qty === 1) {
        return state.map((x) => x.id !== product.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
      break;
    default:
      break;
  }
};
export default handleCart;
