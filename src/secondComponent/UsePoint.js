import { AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../styledComponent/all";

const UsePointHeader = styled.div`
  background-color: white;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    a {
      img {
        cursor: pointer;
        width: 20px;
      }
    }
    img {
      cursor: pointer;
      width: 40px;
    }
  }
`;


const AcoodianContent = styled(motion.div)`
  width: 100%;
  text-align: center;

  ul {
    background: #fff;
  }
`;

const ItemWrap = styled(motion.li)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-top: -1px;
  background: white;
  overflow: hidden;
  height: 50px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 20px;
    }
    h2 {
      margin-left: 15px;
      font-size: 15px;
      z-index: 1;
      opacity: 0.9;
    }
  }
`;

const Img = styled(motion.div)`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 30px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px !important;
    border-radius: 50%;
    vertical-align: bottom;
  }
`;

const SubWrap = styled(motion.div)`
  font-size: 15px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  text-align: start;

  ul {
    font-size: 13px;
    padding: 10px;
  }
  p {
    font-size: 10px;
    padding: 10px 0;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 80%;
      text-align: center;
      height: 40px;
      border-radius: 15px;
      border: 1px solid black;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`;

function UsePoint() {
  const UserPointerWrapper = styled.div`
    background-color: white;
    margin-top: 15px;
    padding: 10px;
    div {
      display: flex;
      font-size: 12px;
      img {
        margin-right: 5px;
        width: 15px;
        height: 15px;
      }
    }
  `;

  const [current, setCurrent] = useState(2);

  const Item = ({ item, index }) => {
    //const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
      //console.log("toggle...")
      //setIsOpen(!isOpen);
      if (current == index) {
        setCurrent(2);
      } else {
        setCurrent(index);
      }
    };

    return (
      <>
        <ItemWrap
          onClick={toggleOpen}
          layout
          transition={{
            type: "spring",
            duration: 0.3,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          key={index}
        >
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${item.img}.png`}
            />
            <motion.h2>{item.title}</motion.h2>
          </div>

          <Img>
            <motion.img
              layout
              transition={{
                type: "spring",
                duration: 0.1,
                ease: [0.43, 0.13, 0.23, 0.96],
              }}
              animate={{ rotate: current === index ? 270 : 90 }}
              src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}
              alt={item.title}
            />
          </Img>
        </ItemWrap>
        <AnimatePresence>
          {current === index && (
            <SubWrap
              layout
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <motion.ul>
                {item.content.map((n) => {
                  return <li>- {n}</li>;
                })}
              </motion.ul>
              <h2>※ 취소불가</h2>
              <p>{item.confirm}</p>
              <div>
                <button>{item.buttonTitle}</button>
              </div>
            </SubWrap>
          )}
        </AnimatePresence>
      </>
    );
  };

  function Acoodian() {
    const [isOpened, setIsOpened] = useState();
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
        img: "cashout",
      },
      {
        title: "기부하기",
        content: ["신청 기준 : 1000P 이상 부터"],
        confirm: "* 기부 내역은 내정보 > 기부내역에서 확인 가능합니다.",
        buttonTitle: "기부하기 신청 >",
        img: "donate",
      },
    ];
    return (
      <>
        <AcoodianContent>
          <motion.ul>
            {InnerContent.map((item, index) => (
              <Item
                key={index}
                item={item}
                index={index}
                isOpened={isOpened}
                //onClick={activeOpen}
              />
            ))}
          </motion.ul>
        </AcoodianContent>
      </>
    );
  }
  return (
    <Wrapper>
      <UsePointHeader>
        <div>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/icon_close.png`}
            />
          </Link>
          <h1>사용하기</h1>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/icon_coupon.png`}
          />
        </div>
        <h2 style={{ fontSize: "12px", fontWeight: "bolder", padding: "10px" }}>
          적립 포인트는 다음과 같은 방법으로 사용하실 수 있습니다.
        </h2>
      </UsePointHeader>
      <Acoodian />
      <UserPointerWrapper>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/version.png`} />
          <p>
            기존에 구매하신 쿠폰은 우측 상단 쿠폰함에서 사용하실 수 있습니다.
          </p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/images/version.png`} />
          <p>
            포인트 유효기간은 지급일로부터 24개월입니다. <br />
            소멸예정포인트는 내정보>포인트 내역>소멸예정에서 확인 가능합니다.
            <br />
            소멸예정포인트는 당월 말일에 자동 소멸됩니다.
          </p>
        </div>
      </UserPointerWrapper>
    </Wrapper>
  );
}

export default UsePoint;
