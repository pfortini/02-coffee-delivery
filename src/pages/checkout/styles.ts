import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 5rem;
`;

export const CheckoutGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.25rem;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: fit-content;

  gap: 2rem;
  padding: 2.5rem 8.25rem 2.5rem 2.5rem;

  border: 1px solid ${(props) => props.theme['purple']};
  border-radius: 6px 36px;
`;

export const DetailsLine = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const DetailsText = styled.div``;

export const MapIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme['purple']};
`;

export const TimerIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow']};
`;

export const CurrencyIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-dark']};
`;
