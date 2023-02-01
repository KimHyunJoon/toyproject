import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f0f0f0;

  @media screen and (max-width: 500px) {
    width: 360px;
  }
  @media screen and (min-width: 767px) {
    width: 800px;
  }
  @media screen and (min-width: 1023px) {
    width: 1000px;
  }
  @media screen and (min-width: 1220px) {
    width: 1100px;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
  }
`;
