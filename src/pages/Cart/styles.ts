import styled from 'styled-components';

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const CheckoutFormCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 40rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
`;

export const CheckoutCartCol = styled.div`
  max-width: 28rem;
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1rem;

  padding: 2.5rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

export const PriceLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CheckoutButton = styled.button`
  text-transform: uppercase;

  margin-top: 1.5rem;

  border: none;
  border-radius: 8px;
  background: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const PaymentInstructionsLine = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const PaymentMethodsLine = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export const InstructionsText = styled.div``;

interface PaymentMethodOptionProps {
  selected: boolean;
}

export const PaymentMethodOption = styled.div<PaymentMethodOptionProps>`
  padding: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  background: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme['purple']}`
      : '1px solid transparent'};
  cursor: pointer;
`;

export const AddressInstructionsLine = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const AddressText = styled.div``;

export const FormLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  background: ${(props) => props.theme['base-input']};
  border: none;
  appearance: inherit;
  -moz-appearance: textfield;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`;

export const UFInput = styled(StyledInput)`
  width: 3.75rem;
`;

export const ZipInput = styled(StyledInput)`
  width: 12.5rem;
`;
