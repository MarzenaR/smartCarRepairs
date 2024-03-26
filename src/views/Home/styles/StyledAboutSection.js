import styled from "styled-components";

export const AboutSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
  width: 70vw;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100vw;
    padding: 0 50px;
  }

  .about-img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 60px;

  @media (max-width: 900px) {
    margin-right: 0;
  }

  .col-desc {
    margin: 40px 0;
    max-width: 400px;
  }
`;
