import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;

  padding: 5px;
  width: 100px;
  margin-left: 25px;

  font-size: 24px;
  color: #ffffff;
  background: linear-gradient(
    98.94deg,
    rgba(200, 34, 228, 0.4) 2.52%,
    rgba(87, 25, 244, 0.4) 92.81%
  );
  border: none;
  :hover,
  :focus {
    background: linear-gradient(
      104.35deg,
      rgba(184, 86, 219, 0.4) 40.82%,
      rgba(127, 61, 240, 0.4) 97.24%
    );
  }
`;
