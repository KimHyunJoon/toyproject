import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import HeaderBox from "./Header";
import { Wrapper } from "../styledComponent/all";

const Point = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 30px 15px;
  display: flex;
  justify-content: space-between;
  .leftPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      img {
        width: 6px;
      }
    }
    p {
      padding: 5px 0px;
      font-size: 35px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }
  }

  .rightPoint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${(props) => props.theme.fontColor2};
    div {
      display: flex;
      justify-content: space-between;

      h2 {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
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
      margin-bottom: 15px;

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

const TotalPoint = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  height: 40px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  width: 95%;
  height: 80px;
  border-top: 1px solid #f0f0f0;
  .leftContent {
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 50px;
    }
  }
  .rightContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
function AccumulateContentNone() {
  return (
    <AccumulateContentWrapper>
      <img src={`${process.env.PUBLIC_URL}/assets/images/pointImg.png`} />
      <h2>?????? ????????? ????????? ????????????.</h2>
      <h2>?????? ????????? ?????? ???????????? ????????? ?????? ????????????!</h2>

      <h1>
        ?????? ????????? ????????? ????????????
        <span>
          <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
        </span>
      </h1>
    </AccumulateContentWrapper>
  );
}
function AccumulateContent() {
  return (
    <Content>
      <div class="leftContent">
        <img src={`${process.env.PUBLIC_URL}/assets/images/copy_3.png`} />
        <div>
          <p>???????????? : ?????? ?????? ??????</p>
          <p>????????? ?????? ??????</p>
          <p>2022-12-20</p>
        </div>
      </div>
      <div class="rightContent">
        <h2>30p</h2>
        <p>??????</p>
      </div>
    </Content>
  );
}
function Accumulate() {
  const data = [
    {
      id: 0,
      title: "??????",
      description: <AccumulateContentNone />,
    },
    {
      id: 1,
      title: "??????",
      description: (
        <>
          <AccumulateContent />
          <AccumulateContent />
          <AccumulateContent />
        </>
      ),
    },
    {
      id: 2,
      title: "??????",
      description: <h1>????????? ??????</h1>,
    },
    {
      id: 3,
      title: "??????",
      description: <h1>????????? ??????</h1>,
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
                {index === item.id ? item.description : "????"}
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
      title: "??????",
      description: <Accumulate />,
    },
    {
      id: 1,
      mainid: "main_1",
      title: "??????",
      description: (
        <>
          <TotalPoint>
            <p>??? ?????? ?????????</p>
            <h2>0P</h2>
          </TotalPoint>
          <AccumulateContentNone />,
        </>
      ),
    },
    {
      id: 2,
      mainid: "main_2",
      title: "??????",
      description: (
        <>
          <TotalPoint>
            <p>??? ?????? ?????????</p>
            <h2>0P</h2>
          </TotalPoint>
          <AccumulateContentNone />,
        </>
      ),
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
                {index === item.id ? item.description : "????"}
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
      <HeaderBox title={"????????? ??????"} />
      <Point>
        <div className="leftPoint">
          <h2>
            ????????? ??????{" "}
            <span>
              <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
            </span>
          </h2>
          <p>{[allPoint].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}P</p>
        </div>
        <div className="rightPoint">
          <div>
            <p>????????????</p>
            <h2>{savePoint}P</h2>
          </div>
          <hr width="100%" size="1" color="white"></hr>
          <div>
            <p>????????????</p>
            <h2>{deletePoint}P</h2>
          </div>
          <p>(?????? ?????? ??????)</p>
        </div>
      </Point>
      <Tab />
    </Wrapper>
  );
}

export default DetailPoint;
