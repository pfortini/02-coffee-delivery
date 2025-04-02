import { createContext, ReactNode, useEffect, useReducer } from 'react';
import americano from  '../assets/americano.png';
import arabe from  '../assets/arabe.png';
import cafeComLeite from  '../assets/cafe-com-leite.png';
import cafeGelado from  '../assets/cafe-gelado.png';
import capuccino from  '../assets/capuccino.png';
import chocolateQuente from  '../assets/chocolate-quente.png';
import cubano from  '../assets/cubano.png';
import expressoCremoso from  '../assets/expresso-cremoso.png';
import expresso from  '../assets/expresso.png';
import havaiano from  '../assets/havaiano.png';
import irlandes from  '../assets/irlandes.png';
import latte from  '../assets/latte.png';
import macchiato from  '../assets/macchiato.png';
import mochaccino from  '../assets/mochaccino.png';
import { cartReducer } from '../reducers/cart/reducer';
import { addItemToCart, decreaseCartItemAmount, emptyCart as _emptyCart, increaseCartItemAmount, removeItemFromCart } from '../reducers/cart/actions';

export interface CoffeeType {
    id: number,
    name: string,
    img: string,
    tags: Tag[],
    description: string,
    price: number
}

interface Tag {
  id: number;
  text: string;
}

export interface CartItem {
  qty: number;
  product: CoffeeType;
}

interface CartContextType {
  items: CartItem[];
  total: number;
  deliveryFee: number;
  addItem: (product: CoffeeType, qty: number) => void;
  increaseItemAmount: (product: CoffeeType) => void;
  decreaseItemAmount: (product: CoffeeType) => void;
  removeItem: (product: CoffeeType) => void;
  emptyCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const Americano: CoffeeType = {
  id: 1,
  name: 'Expresso Americano',
  img: americano,
  tags: [{ id: 1, text: 'tradicional' }],
  description: 'Expresso diluído, menos intenso que o tradicional',
  price: 9.9
};

const Arabe: CoffeeType = {
  id: 2,
  name: 'Árabe',
  img: arabe,
  tags: [{ id: 2, text: 'especial' }],
  description: 'Bebida preparada com grãos de café árabe e especiarias',
  price: 9.9
};

const CafeComLeite: CoffeeType = {
  id: 3,
  name: 'Café com Leite',
  img: cafeComLeite,
  tags: [{ id: 1, text: 'tradicional' }, { id: 3, text: 'com leite' }],
  description: 'Meio a meio de expresso tradicional com leite vaporizado',
  price: 9.9
};

const CafeGelado: CoffeeType = {
  id: 4,
  name: 'Expresso Gelado',
  img: cafeGelado,
  tags: [{ id: 1, text: 'tradicional' }, { id: 4, text: 'gelado' }],
  description: 'Bebida preparada com café expresso e cubos de gelo',
  price: 9.9
};

const Capuccino: CoffeeType = {
  id: 5,
  name: 'Capuccino',
  img: capuccino,
  tags: [{ id: 1, text: 'tradicional' }, { id: 3, text: 'com leite' }],
  description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
  price: 9.9
};

const ChocolateQuente: CoffeeType = {
  id: 6,
  name: 'Chocolate Quente',
  img: chocolateQuente,
  tags: [{ id: 2, text: 'especial' }, { id: 3, text: 'com leite' }],
  description: 'Bebida feita com chocolate dissolvido no leite quente e café',
  price: 9.9
};

const Cubano: CoffeeType = {
  id: 7,
  name: 'Cubano',
  img: cubano,
  tags: [{ id: 2, text: 'especial' }, { id: 5, text: 'alcoólico' }, { id: 4, text: 'gelado' }],
  description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
  price: 9.9
};

const ExpressoCremoso: CoffeeType = {
  id: 8,
  name: 'Expresso Cremoso',
  img: expressoCremoso,
  tags: [],
  description: 'Café expresso tradicional com espuma cremosa',
  price: 9.9
};

const Expresso: CoffeeType = {
  id: 9,
  name: 'Expresso Tradicional',
  img: expresso,
  tags: [],
  description: 'O tradicional café feito com água quente e grãos moídos',
  price: 9.9
};

const Havaiano: CoffeeType = {
  id: 10,
  name: 'Havaiano',
  img: havaiano,
  tags: [{ id: 2, text: 'especial' }],
  description: 'Bebida adocicada preparada com café e leite de coco',
  price: 9.9
};

const Irlandes: CoffeeType = {
  id: 11,
  name: 'Irlandês',
  img: irlandes,
  tags: [{ id: 2, text: 'especial' }, { id: 5, text: 'alcoólico' }],
  description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
  price: 9.9
};

const Latte: CoffeeType = {
  id: 12,
  name: 'Latte',
  img: latte,
  tags: [{ id: 1, text: 'tradicional' }, { id: 3, text: 'com leite' }],
  description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
  price: 9.9
};

const Macchiato: CoffeeType = {
  id: 13,
  name: 'Macchiato',
  img: macchiato,
  tags: [{ id: 1, text: 'tradicional' }, { id: 3, text: 'com leite' }],
  description: 'Café expresso misturado com um pouco de leite quente e espuma',
  price: 9.9
};

const Mochaccino: CoffeeType = {
  id: 14,
  name: 'Mocaccino',
  img: mochaccino,
  tags: [{ id: 1, text: 'tradicional' }, { id: 3, text: 'com leite' }],
  description: 'Café expresso com calda de chocolate, pouco leite e espuma',
  price: 9.9
};

const deliveryFee = 3.5;

export const Products = {
  Americano,
  Arabe,
  CafeComLeite,
  CafeGelado,
  Capuccino,
  ChocolateQuente,
  Cubano,
  ExpressoCremoso,
  Expresso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [], total: 0 }, initialState => {
    const storedState = localStorage.getItem('@coffee-delivery:cart-state-1.0.0');
    if (storedState) return JSON.parse(storedState);
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', JSON.stringify(cartState));
  }, [cartState]);

  function addItem(product: CoffeeType, qty: number) {
    dispatch(addItemToCart(product, qty));
  }

  function increaseItemAmount(product: CoffeeType) {
    dispatch(increaseCartItemAmount(product));
  }

  function decreaseItemAmount(product: CoffeeType) {
    dispatch(decreaseCartItemAmount(product));
  }

  function removeItem(product: CoffeeType) {
    dispatch(removeItemFromCart(product));
  }

  function emptyCart() {
    dispatch(_emptyCart());
  }

  return (
    <CartContext.Provider value={{
      ...cartState,
      deliveryFee,
      addItem,
      increaseItemAmount,
      decreaseItemAmount,
      removeItem,
      emptyCart
    }}>
      {children}
    </CartContext.Provider>
  );
}
