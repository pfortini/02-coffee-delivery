import { createContext, ReactNode, useEffect, useState } from 'react';

export const paymentMethodLabels = {
  '': '',
  'credit': 'Cartão de Crédito',
  'debit': 'Cartão de Débito',
  'cash': 'Dinheiro'
};

interface CheckoutFormProps {
  zip: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  uf: string;
  paymentMethod: keyof typeof paymentMethodLabels;
}

interface CheckoutContextType {
  form: CheckoutFormProps;
  valid: boolean;
  setZip: (zip: string) => void;
  setStreet: (street: string) => void;
  setNumber: (number: string) => void;
  setComplement: (complement: string) => void;
  setNeighborhood: (neighborhood: string) => void;
  setCity: (city: string) => void;
  setUf: (uf: string) => void;
  setPaymentMethod: (uf: keyof typeof paymentMethodLabels) => void;
}

interface CheckoutContextProviderProps {
  children: ReactNode;
}

export const CheckoutContext = createContext({} as CheckoutContextType);

export function CheckoutContextProvider({ children }: CheckoutContextProviderProps) {
  const storedState = localStorage.getItem('@coffee-delivery:form-state-1.0.0');
  const initialFormState = storedState ? JSON.parse(storedState) : {
    zip: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
    paymentMethod: ''
  };

  const [form, setForm] = useState<CheckoutFormProps>(initialFormState);
  const [validForm, setValidForm] = useState(false);

  function setZip(zip: string) { setForm(state => ({ ...state, zip })); }
  function setStreet(street: string) { setForm(state => ({ ...state, street })); }
  function setNumber(number: string) { setForm(state => ({ ...state, number })); }
  function setComplement(complement: string) { setForm(state => ({ ...state, complement })); }
  function setNeighborhood(neighborhood: string) { setForm(state => ({ ...state, neighborhood })); }
  function setCity(city: string) { setForm(state => ({ ...state, city })); }
  function setUf(uf: string) { setForm(state => ({ ...state, uf })); }
  function setPaymentMethod(paymentMethod: keyof typeof paymentMethodLabels) { setForm(state => ({ ...state, paymentMethod })); }

  useEffect(() => {
    const validForm =
      typeof form.zip == 'string' && form.zip.trim() != '' &&
      typeof form.street == 'string' && form.street.trim() != '' &&
      typeof form.number == 'string' && form.number.trim() != '' &&
      typeof form.neighborhood == 'string' && form.neighborhood.trim() != '' &&
      typeof form.city == 'string' && form.city.trim() != '' &&
      typeof form.uf == 'string' && form.uf.trim() != '' &&
      typeof form.paymentMethod == 'string' && form.paymentMethod.trim() != '';

    setValidForm(validForm);
  }, [form]);

  useEffect(() => {
    localStorage.setItem('@coffee-delivery:form-state-1.0.0', JSON.stringify(form));
  }, [form]);

  return (
    <CheckoutContext.Provider value={{
      form,
      valid: validForm,
      setZip,
      setStreet,
      setNumber,
      setComplement,
      setNeighborhood,
      setCity,
      setUf,
      setPaymentMethod
    }}>
      {children}
    </CheckoutContext.Provider>
  );
}
