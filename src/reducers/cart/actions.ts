import { CoffeeType } from '../../contexts/Products';

/* eslint-disable no-unused-vars */
export enum ActionTypes {
    ADD_ITEM = 'add',
    INCREASE_ITEM_AMOUNT = 'increase',
    DECREASE_ITEM_AMOUNT = 'decrease',
    REMOVE_ITEM_FROM_CART = 'remove',
    EMPTY_CART = 'empty',
}

export function addItemToCart(product: CoffeeType, qty: number) {
  return { type: ActionTypes.ADD_ITEM, payload: { product, qty } };
}

export function increaseCartItemAmount(product: CoffeeType) {
  return { type: ActionTypes.INCREASE_ITEM_AMOUNT, payload: { product } };
}

export function decreaseCartItemAmount(product: CoffeeType) {
  return { type: ActionTypes.DECREASE_ITEM_AMOUNT, payload: { product } };
}

export function removeItemFromCart(product: CoffeeType) {
  return { type: ActionTypes.REMOVE_ITEM_FROM_CART, payload: { product } };
}

export function emptyCart() {
  return { type: ActionTypes.EMPTY_CART, payload: {} };
}
