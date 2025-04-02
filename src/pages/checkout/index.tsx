import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { defaultTheme, TextLRegular, TextMRegular, TextS, TitleL } from '../../styles/themes/default';
import { CheckoutContainer, CheckoutGrid, CurrencyIconWrapper, DetailsContainer, DetailsLine, DetailsText, MapIconWrapper, TimerIconWrapper } from './styles';
import moto from '../../assets/moto.png';
import { useContext } from 'react';
import { CheckoutContext, paymentMethodLabels } from '../../contexts/Checkout';

export function Checkout() {
  const { form } = useContext(CheckoutContext);

  return (
    <CheckoutContainer>
      <TitleL color={defaultTheme['yellow-dark']}>Uhu! Pedido confirmado!</TitleL>
      <TextLRegular color={defaultTheme['base-subtitle']}>Agora é só aguardar que logo o café chegará até você</TextLRegular>
      <CheckoutGrid>
        <DetailsContainer>
          <DetailsLine>
            <MapIconWrapper>
              <MapPin weight='fill' color={defaultTheme['white']} size={22} />
            </MapIconWrapper>
            <DetailsText>
              <TextMRegular color={defaultTheme['base-subtitle']}>Entrega em <b>{form.street}, {form.number}{form.complement ? ` - ${form.complement}` : ''}</b></TextMRegular>
              <TextS color={defaultTheme['base-text']}>{form.neighborhood} - {form.city}, {form.uf}</TextS>
            </DetailsText>
          </DetailsLine>

          <DetailsLine>
            <TimerIconWrapper>
              <Timer weight='fill' color={defaultTheme['white']} size={22} />
            </TimerIconWrapper>
            <DetailsText>
              <TextMRegular color={defaultTheme['base-subtitle']}>Previsão de entrega</TextMRegular>
              <TextS color={defaultTheme['base-text']}><b>20 - 30 min</b></TextS>
            </DetailsText>
          </DetailsLine>

          <DetailsLine>
            <CurrencyIconWrapper>
              <CurrencyDollar weight='fill' color={defaultTheme['white']} size={22} />
            </CurrencyIconWrapper>
            <DetailsText>
              <TextMRegular color={defaultTheme['base-subtitle']}>Pagamento na entrega</TextMRegular>
              <TextS color={defaultTheme['base-text']}><b>{paymentMethodLabels[form.paymentMethod]}</b></TextS>
            </DetailsText>
          </DetailsLine>
        </DetailsContainer>
        <img src={moto} />
      </CheckoutGrid>
    </CheckoutContainer>
  );
}
