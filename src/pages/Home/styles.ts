import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding-top: 5.875rem;
  padding-bottom: 9.8125rem;
`;

export const LandingContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  margin-bottom: 6.75rem;
`;

export const LandingText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BaseInstructionIcon = styled.div`
  display: flex;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 50%;

  color: ${(props) => props.theme['white']};
`;

export const CartIconContainer = styled(BaseInstructionIcon)`
  background: ${(props) => props.theme['yellow-dark']};
`;

export const PackageIconContainer = styled(BaseInstructionIcon)`
  background: ${(props) => props.theme['base-text']};
`;

export const TimerIconContainer = styled(BaseInstructionIcon)`
  background: ${(props) => props.theme['yellow']};
`;

export const CoffeeIconContainer = styled(BaseInstructionIcon)`
  background: ${(props) => props.theme['purple']};
`;

export const InstructionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LandingInstructions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2.5rem;
  margin-top: 3.125rem;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
`;

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
