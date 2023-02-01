import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderBox from "./Header";
import { Wrapper } from "../styledComponent/all";

const InviteWrapper = styled.div`
  text-align: center;
  img {
    width: 100%;
    max-width: 800px;
  }
`;

const InviteLinkWrapper = styled.div`
  background-color: white;
  padding: 10px;
  h2 {
    font-weight: bold;
  }
`;
const LinkCopy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  img {
    width: 60px;
    height: 60px;
  }
`;
const Circle = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;
`;

const Recommender = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #f0f0f0;
  border-radius: 30px;
  margin-bottom: 100px;
  cursor: pointer;
  p {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 15px;
      img {
        width: 8px;
      }
    }
  }
`;
const FooterWrapper = styled.div`
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70px;
  h2 {
    span {
      color: red;
    }
  }
`;

function InviteMain() {
  return (
    <InviteWrapper>
      <div>
        <img src={`${process.env.PUBLIC_URL}/assets/images/inviteMain.png`} />
      </div>
    </InviteWrapper>
  );
}

function InviteLink() {
  return (
    <InviteLinkWrapper>
      <h2>친구초대</h2>
      <LinkCopy>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/kakao.png`} />
        </Link>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/facebook.png`} />
        </Link>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/Naver.png`} />
        </Link>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/mail.png`} />
        </Link>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/assets/images/kakao.png`} />
        </Link>
      </LinkCopy>
      <Recommender>
        <p>
          추천인 입력하러 가기{" "}
          <span>
            <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
          </span>
        </p>
      </Recommender>
      <p style={{ fontSize: "13px" }}>
        다른 회원이 나를 추천인으로 입력하면, 총 20회까지 포인트가 추가
        적립됩니다.
      </p>
    </InviteLinkWrapper>
  );
}

function Invite() {
  const [Id, setId] = useState("hjkim4500@naver.com");
  const [Number, setNumber] = useState(0);
  return (
    <Wrapper>
      <HeaderBox title={"친구초대"} color={"white"} />
      <InviteMain />
      <InviteLink />
      <Footer Id={Id} Number={Number} />
    </Wrapper>
  );
}
function Footer({ Id, Number }) {
  return (
    <FooterWrapper>
      <h2>{Id}님은</h2>
      <h2>
        현재까지 총 <span>{Number}회</span> 추가 적립 되었습니다.
      </h2>
    </FooterWrapper>
  );
}
export default Invite;
