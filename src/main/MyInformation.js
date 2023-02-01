import styled from "styled-components";
import PointInfo from "../component/PointInfo";
import MyInfo from "../component/MyInfo";
import { Wrapper } from "../styledComponent/all";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.headerColor};
  height: 50px;
  font-size: 19px;
`;

const Footer = styled.div`
  margin-top: 1px;
  background-color: white;
  height: 50px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 10px;
    cursor: pointer;
    img {
      width: 20px;
      margin-bottom: 5px;
    }
  }
`;

function MyInformation() {
  return (
    <Wrapper>
      <Header>
        <h1>내정보</h1>
      </Header>
      <PointInfo />
      <MyInfo />
      <Footer>
        <Ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/home.png`} />홈
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/home.png`} />
            영수증등록
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/home.png`} />
            포인트내역
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/myPage.png`} />
            내정보
          </li>
        </Ul>
      </Footer>
    </Wrapper>
  );
}

export default MyInformation;
