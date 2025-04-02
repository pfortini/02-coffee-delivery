import { produce } from 'immer';
import { CartItem } from '../../contexts/Products';
import { ActionTypes } from './actions';

interface CartState {
  items: CartItem[];
  total: number;
}

export function cartReducer(state: CartState, action) {
  function cartPrice(items: CartItem[]) {
    return items.reduce((total, item) => {
      total += item.qty * item.product.price;
      return total;
    }, 0);
  }

  switch (action.type) {
  case ActionTypes.ADD_ITEM: {
    const cartIndex = state.items.findIndex(item => item.product.id === action.payload.product.id);

    if (cartIndex < 0) {
      return produce(state, draft => {
        draft.items.push(action.payload);
        draft.total = cartPrice(draft.items);
      });
    }

    return produce(state, draft => {
      draft.items[cartIndex].qty += action.payload.qty;
      draft.total = cartPrice(draft.items);
    });
  }

  case ActionTypes.INCREASE_ITEM_AMOUNT: {
    const cartIndex = state.items.findIndex(item => item.product.id == action.payload.product.id);

    if (cartIndex < 0) return state;

    return produce(state, draft => {
      draft.items[cartIndex].qty++;
      draft.total = cartPrice(draft.items);
    });
  }

  case ActionTypes.DECREASE_ITEM_AMOUNT: {
    const cartIndex = state.items.findIndex(item => item.product.id == action.payload.product.id);

    if (cartIndex < 0) return state;

    const cartItem = state.items[cartIndex];

    if (cartItem.qty == 1) {
      return produce(state, draft => {
        draft.items = draft.items.filter((_, i) => i != cartIndex);
        draft.total = cartPrice(draft.items);
      });
    }

    return produce(state, draft => {
      draft.items[cartIndex].qty--;
      draft.total = cartPrice(draft.items);
    });
  }

  case ActionTypes.REMOVE_ITEM_FROM_CART: {
    const cartIndex = state.items.findIndex(item => item.product.id == action.payload.product.id);

    if (cartIndex < 0) return state;

    return produce(state, draft => {
      draft.items = draft.items.filter((_, i) => i != cartIndex);
      draft.total = cartPrice(draft.items);
    });
  }

  case ActionTypes.EMPTY_CART: {
    return produce(state, draft => {
      draft.items = [];
      draft.total = cartPrice(draft.items);
    });
  }

  default: return state;
  }
}
