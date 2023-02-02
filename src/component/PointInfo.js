import { useState } from "react";
import styled from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useMotionValue, useTransform } from "framer-motion";

const Wrapper = styled.div`
  background-color: white;
  padding: 10px 10px;
`;

const Id = styled.h2`
  font-size: 12px;
  padding: 10px 0;
`;

const Point = styled.div`
  background-color: ${(props) => props.theme.mainColor};
  padding: 30px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
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

const PointImg = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .PointLocation {
    width: 100%;
    position: relative;
    .Bar {
      width: 100%;
      height: 15px;
    }
    .checking {
      width: 20px;
      position: absolute;
      top: -2px;
      left: 0%;
      z-index: 4;
    }

    .Bar_2 {
      position: absolute;
      top: 3px;
      width: 75%; //여기를 수정하면 됨
      height: 10px;
      border-radius: 20px;
      background-color: ${(props) => props.theme.mainColor};

      .Icon {
        position: absolute;
        left: 90%;
        top: -17px;
        width: 40px;
        height: 40px;
        z-index: 5;
        @media screen and (min-width: 767px) {
          left: 95%;
        }
      }
    }
  }
`;

const UL = styled.ul`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  li {
    display: flex;
    font-size: 15px;
  }
`;
const UsePoint = styled.div`
  margin: 15px 0px;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 20px;
    width: 10px;
    height: 10px;
  }
`;

function CheckingNumberFnc(scaleValue) {
  let checking_number = [];
  if (scaleValue < 25) {
    checking_number.push(0);
  } else if (scaleValue < 50) {
    checking_number.push(0, 1);
  } else if (scaleValue < 75) {
    checking_number.push(0, 1, 2);
  } else if (scaleValue <= 100) {
    checking_number.push(0, 1, 2, 3);
  }

  return checking_number;
}
function PointInfo() {
  const [allPoint, setAllPoint] = useState(34000);
  const [savePoint, setSavePoint] = useState(0);
  const [deletePoint, setDeletePoint] = useState(0);
  const pointValue = useMotionValue(allPoint);
  const scaleValue = useTransform(pointValue, [0, 20000, 40000], [0, 50, 100]);

  const history = useHistory();

  const onDetailPointClicked = () => {
    history.push(`/detailPoint`);
  };
  const onUsePointClicked = () => {
    history.push(`/usePoint`);
  };

  return (
    <Wrapper>
      <Id>홍길동님(aaa@google.com)</Id>
      <Point onClick={onDetailPointClicked}>
        <div className="leftPoint">
          <h2>
            포인트 내역{" "}
            <span>
              <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
            </span>
          </h2>
          <p>{[allPoint].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}P</p>
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
      <PointImg>
        <div className="PointLocation">
          <img
            className="Bar"
            src={`${process.env.PUBLIC_URL}/assets/images/bg_graph.png`}
          />
          {CheckingNumberFnc(scaleValue.current).map((num) => {
            console.log(25 * num);
            return (
              <img
                key={num}
                style={{ left: `${25 * num}%` }}
                className="checking"
                src={`${process.env.PUBLIC_URL}/assets/images/icon_check.png`}
              />
            );
          })}
          <div style={{ width: `${scaleValue.current}%` }} className="Bar_2">
            <img
              className="Icon"
              src={`${process.env.PUBLIC_URL}/assets/images/graphicon_me.png`}
            />
          </div>
        </div>
        <UL>
          <li>0</li>
          <li>10,000</li>
          <li>20,000</li>
          <li>30,000</li>
          <li>40,000</li>
        </UL>
      </PointImg>
      <UsePoint onClick={onUsePointClicked}>
        <p>포인트 사용하기</p>
        <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
      </UsePoint>
    </Wrapper>
  );
}

export default PointInfo;
