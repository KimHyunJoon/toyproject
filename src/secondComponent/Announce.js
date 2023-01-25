import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";
import HeaderBox from "./Header";

const Wrapper = styled.div`
  background: #f0f0f0;
  width: 360px;
`;

const AnnounceBoxWrapper = styled.div`
  background-color: white;
  padding: 15px;
`;

const ButtonBox = styled.div`
  margin: 20px 0px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      font-size: 15px;
      font-weight: bolder;
    }
    input[type="checkbox"] {
      position: relative;
      width: 60px;
      height: 30px;
      outline: 1px solid #f0f0f0;
      background-color: white;
      cursor: pointer;
      border-radius: 15px;
      -webkit-appearance: none;
      transition: 0.5s;

      :checked {
        background-color: ${(props) => props.theme.headerColor};
        ::before {
          left: 30px;
        }
      }
      ::before {
        content: "";
        position: absolute;
        outline: 1px solid #f0f0f0;
        top: 1px;
        left: 1px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: white;
        transition: 0.5s;
      }
    }
  }
  ul {
    margin: 10px 0;
    li {
      font-size: 12px;
    }
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 360px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
`;
const Modal = styled(motion.div)`
  position: absolute;
  width: 260px;
  height: 180px;
  background-color: white;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 13px;
    line-height: 18px;
    :first-child {
      margin-top: 20px;
    }
  }
  p {
    margin-top: 15px;
    font-size: 10px;
  }
  button {
    margin-top: auto;
    width: 100%;
    height: 40px;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
  }
`;

function Announce() {
  const [rewardCheck, setRewardCheck] = useState(true);
  const [marketingCheck, setMarketingCheck] = useState(false);
  const [overlayOn, setOverlayOn] = useState(false);
  const inputRef = useRef(null);
  const overLayOnClick = () => {
    setOverlayOn(true);
  };
  const overLayOffClick = () => {
    setOverlayOn(false);
  };
  const onRewardClicked = () => {
    setRewardCheck((prev) => !prev);
    console.log(inputRef.current);
  };
  const onMarketingClicked = () => {
    setMarketingCheck((prev) => !prev);
  };
  const { scrollY } = useViewportScroll();
  return (
    <Wrapper>
      <HeaderBox title={"알림사항"} />
      <AnnounceBoxWrapper>
        <ButtonBox>
          <div>
            <h2>리워드/포인트 알림</h2>
            <input
              ref={inputRef}
              type="checkbox"
              onChange={onRewardClicked}
              checked={rewardCheck}
            />
          </div>
          <ul>
            <li>- 오늘뭐샀니 리워드 적립현황을 알려드립니다.</li>
            <li> - 알림이 꺼져있을 경우 리워드 신청이 불가합니다.</li>
          </ul>
        </ButtonBox>
        <ButtonBox>
          <div>
            <h2>마케팅 정보 수신 동의 및 설정</h2>
            <input
              onChange={onMarketingClicked}
              onClick={overLayOnClick}
              type="checkbox"
            />
          </div>
          <ul>
            <li>
              - 오늘뭐샀니에서 제공하는 광고/이벤트/공지사항 등 다양한 혜택을
              알려드립니다.
            </li>
          </ul>
        </ButtonBox>
      </AnnounceBoxWrapper>
      <AnimatePresence>
        {overlayOn ? (
          <>
            <Overlay onClick={overLayOffClick} />

            {marketingCheck ? (
              <Modal style={{ top: scrollY.get() + 200 }}>
                <h3>2023.01.17</h3>
                <h3>오늘뭐샀니에서 보내는</h3>
                <h3>광고/이벤트/공지사항 수신여부가</h3>
                <h3>"동의"처리 되었습니다.</h3>
                <p>광고성정보 수신동의 설정 : 내 정보 알림설정</p>
                <button onClick={overLayOffClick}>확인</button>
              </Modal>
            ) : (
              <Modal style={{ top: scrollY.get() + 200 }}>
                <h3>2023.01.17</h3>
                <h3>오늘뭐샀니에서 보내는</h3>
                <h3>광고/이벤트/공지사항 수신여부가</h3>
                <h3>"수신거부"처리 되었습니다.</h3>
                <p>광고성정보 수신동의 설정 : 내 정보 알림설정</p>
                <button onClick={overLayOffClick}>확인</button>
              </Modal>
            )}
          </>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Announce;
