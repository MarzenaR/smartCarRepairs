import styled from "styled-components";

export const StyledH1 = styled.h1`
  text-align: center;
  padding: 0 20px;
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;
export const StyledH2 = styled.h2`
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
`;
export const StyledH3 = styled.h3`
  color: ${({ color, theme }) => (color ? color : theme.colors.main)};
  font-size: 24px;
`;
