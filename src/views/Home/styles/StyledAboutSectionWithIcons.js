import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;

  @media (max-width: 900px) {
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

export const Item = styled.div`
  text-align: center;
  margin: 0 80px;

  @media (max-width: 900px) {
    margin: 30px 0 0 0;
  }

  .icon {
    font-size: 40px;
    color: grey;
    opacity: 0.6;
  }

  .content {
    margin-top: 20px;
    font-size: 18px;
  }
`;
