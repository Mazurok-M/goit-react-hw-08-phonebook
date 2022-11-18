import styled from 'styled-components';

export const FilterForm = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 24px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 400px;
  padding: 8px;
  font-size: 18px;

  margin-bottom: 15px;

  border: 3px solid transparent;
  border-image: linear-gradient(
    319deg,
    rgba(90, 25, 244, 0.71) 0%,
    rgba(228, 34, 201, 0.71) 37%,
    rgba(157, 29, 223, 0.71) 71%
  );
  border-image-slice: 1;
`;
