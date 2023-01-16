import { useState } from "react";
import styled from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";

const Wrapper = styled.div`
    background-color: white;
    padding: 10px 10px;
`;

const Id = styled.p`
font-size: 12px;
font-weight: bold;
padding: 10px 0;
`

const Point = styled.div`
    background-color: ${(props) => props.theme.mainColor};
    padding:30px 15px;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .leftPoint{
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2{
            padding: 5px 0px;
            font-size: 35px;
            font-weight: bolder;

        }
    }
    .rightPoint{
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            display: flex;
            justify-content: space-between;
            h2{
                font-weight: bolder;
            }
        }
        hr{
            margin: 15px 0px;
        }
    }
`

const PointImg = styled.div`
margin-top:30px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img{
    width: 100%;

}
`

const UL = styled.ul`
margin:10px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;

li{
    display: flex;
    font-size: 15px;
}
`
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

h2{
    font-weight: bolder;
}
img{
    margin-left: 20px;
    width:10px;
    height: 10px;
}

`
function PointInfo(){
    const [allPoint, setAllPoint] = useState(0)
    const [savePoint,setSavePoint] = useState(0);
    const [deletePoint, setDeletePoint]= useState(0);
    const history = useHistory();


    const onDetailPointClicked = () =>{
        history.push(`/detailPoint`);
    }
    const onUsePointClicked = () =>{
        history.push(`/usePoint`);
    }
    
    return (
    <Wrapper>
        <Id>홍길동님(aaa@google.com)</Id>
        <Point onClick={onDetailPointClicked}>
            <div className="leftPoint">
                <h4>포인트 내역 </h4>
                <h2>{allPoint}P</h2>
            </div>
            <div className="rightPoint">
                <div>
                    <p>적립예정</p>
                    <h2>{savePoint}P</h2>
                </div>
                <hr width='100%' size="1" color="white"  ></hr>
                <div>
                <p>소멸예정</p>
                    <h2>{deletePoint}P</h2>
                </div>
                <p>(이달 말일 소멸)</p>
            </div>
        </Point>
        <PointImg>
            <img src={`${process.env.PUBLIC_URL}/assets/images/bg_graph.png`}/>
            <UL>
                <li>0</li>
                <li>10,000</li>
                <li>20,000</li>
                <li>30,000</li>
                <li>40,000</li>
            </UL>
        </PointImg>
        <UsePoint onClick={onUsePointClicked}>
            <h2>포인트 사용하기</h2>
            <img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`} />
        </UsePoint>
    </Wrapper>)
}

export default PointInfo;