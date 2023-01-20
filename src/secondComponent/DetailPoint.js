import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBox from "./Header";

const Wrapper = styled.div`
  background: #f0f0f0;
  width: 360px;
`;

const Point = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  .leftPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      padding: 5px 0px;
      font-size: 35px;
      font-weight: bolder;
    }
  }
  .rightPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      justify-content: space-between;
      h2 {
        font-weight: bolder;
      }
    }
    hr {
      margin: 15px 0px;
    }
  }
`;

const TabWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  nav {
    margin-top: 10px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      width: 100%;
      justify-content: center;

      li {
        width: 33%;
        height: 35px;
        position: relative;
        background: #f0f0f0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        user-select: none;

        .underline {
          position: absolute;
          bottom: 35px;
          left: 0;
          right: 0;
          height: 1px;
          background: ${(props) => props.theme.headerColor};
        }
        &.accumulate {
          width: 22%;
          border: 1px solid #f0f0f0;
          margin: 5px;
          border-radius: 5px;

          &.selected {
            border: 1px solid ${(props) => props.theme.mainColor};
            color: ${(props) => props.theme.mainColor};
          }
        }
        &.selected {
          background: white;
        }
      }
    }
  }
`;

const AccumulateContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-direction: column;
  img {
    width: 200px;
    margin-bottom: 50px;
  }
  h1 {
    margin-top: 20px;
    display: flex;
    font-weight: bolder;
    font-size: 20px;

    img {
      margin-left: 20px;
      width: 10px;
    }
  }
`;

function AccumulateContentNone() {
  return (
    <AccumulateContentWrapper>
      <img src={`${process.env.PUBLIC_URL}/assets/images/pointImg.png`} />
      <h2>아직 리워드 내역이 없습니다.</h2>
      <h2>오늘 뭐샀니 상품 구매하고 포인트 적립 받으세요!</h2>

      <h1>
        오늘 뭐샀니 사용법 확인하기
        <span>
          <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
        </span>
      </h1>
    </AccumulateContentWrapper>
  );
}

function Accumulate() {
  const data = [
    {
      id: 0,
      title: "예정",
      description: <AccumulateContentNone />,
    },
    {
      id: 1,
      title: "완료",
      description: <h1>헬로우 완료</h1>,
    },
    {
      id: 2,
      title: "불가",
      description: <h1>헬로우 불가</h1>,
    },
    {
      id: 3,
      title: "취소",
      description: <h1>헬로우 취소</h1>,
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <TabWrapper>
      <nav>
        <ul>
          {data.map((item) => (
            <li
              key={data.id}
              className={`${`accumulate`} ${
                index === item.id ? "selected" : null
              }`}
              //
              onClick={() => setIndex(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          {data
            .filter((item) => index === item.id)
            .map((item) => (
              <motion.div
                key={item.mainid}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {index === item.id ? item.description : "😋"}
              </motion.div>
            ))}
        </AnimatePresence>
      </main>
    </TabWrapper>
  );
}

function Tab() {
  const data = [
    {
      id: 0,
      mainid: "main_0",
      title: "적립",
      description: <Accumulate />,
    },
    {
      id: 1,
      mainid: "main_1",
      title: "사용",
      description: <h2>안녕하세요 사용</h2>,
    },
    {
      id: 2,
      mainid: "main_2",
      title: "전체",
      description: <h2>안녕하세요 전체</h2>,
    },
  ];
  const [index, setIndex] = useState(0);

  return (
    <TabWrapper>
      <nav>
        <ul>
          {data.map((item) => (
            <li
              key={data.id}
              className={index === item.id ? "selected" : null}
              onClick={() => setIndex(item.id)}
            >
              {index === item.id ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}

              {item.title}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          {data
            .filter((item) => index === item.id)
            .map((item) => (
              <motion.div
                key={item.mainid}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {index === item.id ? item.description : "😋"}
              </motion.div>
            ))}
        </AnimatePresence>
      </main>
    </TabWrapper>
  );
}

function DetailPoint() {
  const [allPoint, setAllPoint] = useState(0);
  const [savePoint, setSavePoint] = useState(0);
  const [deletePoint, setDeletePoint] = useState(0);
  return (
    <Wrapper>
      <HeaderBox title={"포인트 내역"} />
      <Point>
        <div className="leftPoint">
          <h4>포인트 내역 </h4>
          <h2>{allPoint}P</h2>
        </div>
        <div className="rightPoint">
          <div>
            <p>적립예정</p>
            <h2>{savePoint}P</h2>
          </div>
          <hr width="100%" size="1" color="white"></hr>
          <div>
            <p>소멸예정</p>
            <h2>{deletePoint}P</h2>
          </div>
          <p>(이달 말일 소멸)</p>
        </div>
      </Point>
      <Tab />
    </Wrapper>
  );
}

export default DetailPoint;
