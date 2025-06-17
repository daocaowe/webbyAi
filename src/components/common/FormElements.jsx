import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const FormContainer = styled.form`
  background-color: #fff;
  padding: 2rem 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const FormText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  margin-top: 1rem;

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;
