import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 360px;
  background: #f0f0f0;
`;

const UsePointHeader = styled.div`
  background-color: white;
  margin-bottom: 15px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    img {
      cursor: pointer;
      width: 20px;
      :last-child {
        width: 40px;
      }
    }
  }
`;

const AcoodianWrapper = styled(motion.div)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  div {
    display: flex;
    img {
      width: 15px;
      height: 15px;
    }
    h2 {
      margin-left: 10px;
    }
  }
  img {
    width: 10px;
  }
`;

const AcoodianContent = styled(motion.div)`
  height: 200px;
`;
function Acoodian({ img, title }) {
  const InnerContent = [
    {
      title: "cashout",
      content: [
        "신청 기준 : 5,000P 이상 부터",
        "지금 단위 : 5000P",
        "지급 방법 : 본인 명의 통장",
        "지급 시기 : 약 3주 (신청일로부터 영업일 기준 15일)",
        "이체 수수료 : 신청 건 당 500p(기업은행면제)",
      ],
      confirm:
        " * 캐시아웃 신청일은 내정보 > 포인트내역 > 사용에서 확인 가능합니다.",
      buttonTitle: "캐시아웃 신청 >",
    },
    {
      title: "기부하기",
      content: ["신청 기준 : 1000P 이상 부터"],
      confirm: "* 기부 내역은 내정보 > 기부내역에서 확인 가능합니다.",
    },
  ];
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <AcoodianWrapper
        onClick={() => setClicked(!clicked)}
        layout
        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/${img}.png`} />
          <h2>{title}</h2>
        </div>
        <motion.img
          style={{ transform: `rotate(90deg)` }}
          src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
        />
      </AcoodianWrapper>
      <AnimatePresence>
        {clicked ? (
          <AcoodianContent>
            <ul>
              
              <li></li>
            </ul>
          </AcoodianContent>
        ) : null}
      </AnimatePresence>
    </>
  );
}
function UsePoint() {
  return (
    <Wrapper>
      <UsePointHeader>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/icon_close.png`} />
          <h1>사용하기</h1>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icon_coupon.png`}
          />
        </div>
        <h2 style={{ fontSize: "12px", fontWeight: "bolder", padding: "10px" }}>
          적립 포인트는 다음과 같은 방법으로 사용하실 수 있습니다.
        </h2>
      </UsePointHeader>
      <Acoodian img="cashout" title="캐시아웃" />
      <Acoodian img="cashout" title="캐시아웃" />
    </Wrapper>
  );
}

export default UsePoint;
