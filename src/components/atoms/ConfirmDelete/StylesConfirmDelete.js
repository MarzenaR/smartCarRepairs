import styled from "styled-components";

export const StyledDeleteBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  width: 150px;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.btnContent};
  background-color: ${({ bgColor }) => bgColor};
  padding: 10px 20px;
  font-size: 15px;
`;

export const StyledConfimDeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .info {
    margin-bottom: 42px;
  }

  .btn-wrapper {
    display: flex;
    justify-content: space-between;
    width: 80%;
    gap: 10px;
  }
`;
