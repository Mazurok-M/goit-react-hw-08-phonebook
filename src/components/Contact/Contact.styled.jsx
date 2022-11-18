import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 2px 12px;
  margin-left: 25px;
  font-size: 20px;

  color: #ffffff;
  background: linear-gradient(
    98.94deg,
    rgba(200, 34, 228, 0.4) 2.52%,
    rgba(87, 25, 244, 0.4) 92.81%
  );
  border-radius: 4px;
  border: 3px solid #55284f;

  :hover,
  :focus {
    background: linear-gradient(
      104.35deg,
      rgba(184, 86, 219, 0.4) 40.82%,
      rgba(127, 61, 240, 0.4) 97.24%
    );
  }
`;

export const Name = styled.div`
  font-size: 18px;
`;
