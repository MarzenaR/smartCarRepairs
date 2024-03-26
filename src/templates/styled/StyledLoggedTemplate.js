import styled from "styled-components";

export const StyledLoggedPanelWrapper = styled.div`
  display: flex;
`;

export const LoggedRouterWrapper = styled.div`
  width: calc(100% - 240px);
  padding: 0 100px;
  margin-left: 240px;

  @media (max-width: 991px) {
    width: calc(100% - 60px);
    padding: 0 20px;
    margin-left: 60px;
  }
`;

export const StyledLogoutWrapper = styled.div`
  position: absolute;
  right: 2%;
  top: 5%;

  .css-78trlr-MuiButtonBase-root-MuiIconButton-root {
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  .css-78trlr-MuiButtonBase-root-MuiIconButton-root:hover {
    opacity: 0.8;
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  .css-i4bv87-MuiSvgIcon-root {
    color: white;
  }
`;
