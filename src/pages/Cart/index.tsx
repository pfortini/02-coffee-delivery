import { useContext } from 'react';
import { ButtonG, ButtonM, defaultTheme, TextLBold, TextMRegular, TextS, TitleXS } from '../../styles/themes/default';
import { CartContext } from '../../contexts/Products';
import { SimpleCoffeeCard } from '../../components/SimpleCoffeeCard';
import { AddressInstructionsLine, AddressText, CartItemsContainer, CheckoutButton, CheckoutCartCol, CheckoutFormCol, CheckoutGrid, FormContainer, FormLine, InstructionsText, PaymentContainer, PaymentInstructionsLine, PaymentMethodOption, PaymentMethodsLine, PriceContainer, PriceLine, StyledInput, UFInput, ZipInput } from './styles';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext } from '../../contexts/Checkout';

type PaymentMethod = '' | 'credit' | 'debit' | 'cash';

export function Cart() {
  const { form, valid, setZip, setStreet, setNumber, setComplement, setNeighborhood, setCity, setUf, setPaymentMethod } = useContext(CheckoutContext);
  const { items, total, deliveryFee, emptyCart } = useContext(CartContext);
  const navigate = useNavigate();

  function handleZipInput(zip: string) { setZip(zip); }
  function handleStreetInput(street: string) { setStreet(street); }
  function handleNumberInput(number: string) { setNumber(number); }
  function handleComplementInput(complement: string) { setComplement(complement); }
  function handleNeighborhoodInput(neighborhood: string) { setNeighborhood(neighborhood); }
  function handleCityInput(city: string) { setCity(city); }
  function handleUfInput(uf: string) { setUf(uf); }
  function handleSetPaymentMethod(method: PaymentMethod) { setPaymentMethod(method); }

  function handleCheckout() {
    emptyCart();
    navigate('/checkout');
  }

  function handleBrowse() {
    navigate('/');
  }

  return (
    <CheckoutGrid>
      <CheckoutFormCol>
        <TitleXS color={defaultTheme['base-subtitle']}>Complete seu pedido</TitleXS>
        <FormContainer>
          <AddressInstructionsLine>
            <MapPinLine color={defaultTheme['yellow-dark']} size={22} />
            <AddressText>
              <TextMRegular color={defaultTheme['base-subtitle']}>Endereço de Entrega</TextMRegular>
              <TextS color={defaultTheme['base-text']}>Informe o endereço onde deseja receber seu pedido</TextS>
            </AddressText>
          </AddressInstructionsLine>
          <FormLine>
            <div>
              <ZipInput value={form.zip} placeholder='CEP' onChange={event => { handleZipInput(event.target.value); }} />
            </div>
            <div>
              <StyledInput value={form.street} placeholder='Rua' onChange={event => { handleStreetInput(event.target.value); }} />
            </div>
            <div>
              <StyledInput value={form.number} placeholder='Número' onChange={event => { handleNumberInput(event.target.value); }} />
              <StyledInput value={form.complement} placeholder='Complemento (Opcional)' onChange={event => { handleComplementInput(event.target.value); }} />
            </div>
            <div>
              <StyledInput value={form.neighborhood} placeholder='Bairro' onChange={event => { handleNeighborhoodInput(event.target.value); }} />
              <StyledInput value={form.city} placeholder='Cidade' onChange={event => { handleCityInput(event.target.value); }} />
              <UFInput id='uf' value={form.uf} placeholder='UF' onChange={event => { handleUfInput(event.target.value); }} />
            </div>
          </FormLine>
        </FormContainer>
        <PaymentContainer>
          <PaymentInstructionsLine>
            <CurrencyDollar color={defaultTheme['purple']} size={22} />
            <InstructionsText>
              <TextMRegular color={defaultTheme['base-subtitle']}>Pagamento</TextMRegular>
              <TextS color={defaultTheme['base-text']}>O pagamento é feito na entrega. Escolha a forma que deseja pagar</TextS>
            </InstructionsText>
          </PaymentInstructionsLine>
          <PaymentMethodsLine>
            <PaymentMethodOption selected={form.paymentMethod == 'credit'} onClick={() => { handleSetPaymentMethod('credit'); }} >
              <CreditCard size={16} color={defaultTheme['purple']} />
              <ButtonM color={defaultTheme['base-text']}>Cartão de Crédito</ButtonM>
            </PaymentMethodOption>
            <PaymentMethodOption selected={form.paymentMethod == 'debit'} onClick={() => { handleSetPaymentMethod('debit'); }} >
              <Bank size={16} color={defaultTheme['purple']} />
              <ButtonM color={defaultTheme['base-text']}>Cartão de Débito</ButtonM>
            </PaymentMethodOption>
            <PaymentMethodOption selected={form.paymentMethod == 'cash'} onClick={() => { handleSetPaymentMethod('cash'); }} >
              <Money size={16} color={defaultTheme['purple']} />
              <ButtonM color={defaultTheme['base-text']}>Dinheiro</ButtonM>
            </PaymentMethodOption>
          </PaymentMethodsLine>
        </PaymentContainer>
      </CheckoutFormCol>

      {
        items.length
          ? (
            <CheckoutCartCol>
              <TitleXS color={defaultTheme['base-subtitle']}>Cafés selecionados</TitleXS>
              <CartItemsContainer>
                { items.map(item => (<SimpleCoffeeCard key={item.product.id} {...item} />)) }
                <PriceContainer>
                  <PriceLine>
                    <TextS>Total de itens</TextS>
                    <TextS>R$ {total.toFixed(2)}</TextS>
                  </PriceLine>
                  <PriceLine>
                    <TextS>Entrega</TextS>
                    <TextS>R$ {deliveryFee.toFixed(2)}</TextS>
                  </PriceLine>
                  <PriceLine>
                    <TextLBold>Total</TextLBold>
                    <TextLBold>R$ {(total + deliveryFee).toFixed(2)}</TextLBold>
                  </PriceLine>
                </PriceContainer>
                <CheckoutButton onClick={handleCheckout} disabled={!valid}>
                  <ButtonG color={defaultTheme['white']}>Confirmar Pedido</ButtonG>
                </CheckoutButton>
              </CartItemsContainer>
            </CheckoutCartCol>
          )
          : (
            <CheckoutCartCol>
              <TitleXS color={defaultTheme['base-subtitle']}>Seu carrinho está vazio</TitleXS>
              <CartItemsContainer>
                <TextMRegular>Veja nosso catálogo e escolha o seu próximo café!</TextMRegular>
                <CheckoutButton onClick={handleBrowse}>
                  <ButtonG color={defaultTheme['white']}>Ver Cafés</ButtonG>
                </CheckoutButton>
              </CartItemsContainer>
            </CheckoutCartCol>
          )
      }
    </CheckoutGrid>
  );
}
