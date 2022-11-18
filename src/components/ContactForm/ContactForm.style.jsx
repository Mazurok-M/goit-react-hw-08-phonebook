import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 500px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #301c49;
  border: 3px solid transparent;
  border-image: linear-gradient(
    319deg,
    rgba(90, 25, 244, 0.71) 0%,
    rgba(228, 34, 201, 0.71) 37%,
    rgba(157, 29, 223, 0.71) 71%
  );
  border-image-slice: 1;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-weight: 600;
`;

export const FormInput = styled.input`
  width: 400px;
  padding: 5px;

  border: 3px solid transparent;
  border-image: linear-gradient(
    319deg,
    rgba(90, 25, 244, 0.71) 0%,
    rgba(228, 34, 201, 0.71) 37%,
    rgba(157, 29, 223, 0.71) 71%
  );
  border-image-slice: 1;
`;

export const Button = styled.button`
  padding: 2px 12px;
  width: 150px;
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
