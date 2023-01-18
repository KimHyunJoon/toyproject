import { useState } from "react";

import styled from "styled-components";
import HeaderBox from "./Header";

const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;

`;


const DonateWrapper = styled.div`
background-color: white;
margin-bottom: 15px;
padding:15px 15px 0 15px;
`

const AllDonate = styled.div`
background-color: ${(props) => props.theme.mainColor};
padding: 20px;
display: flex;
justify-content: space-between;
border-radius: 10px;
div{
    :first-child{
        display: flex;
        img{
            margin-top: 3px;
            margin-right: 5px;
            width: 20px;
            height: 20px;
        }
        h2{
            font-size:20px;
        }
    }
    :last-child{
        h1{
            font-weight: bolder;
            font-size:20px;

        }
    }
}
`;

const DonateYear = styled.div`
padding: 15px;
display: flex;
width: 100%;
justify-content: space-between;
div{
    width: 25%;
    display: flex;
    justify-content: space-between;
    
    :nth-child(2){
        padding: 0 10px; 
        width: 33%;
        border-right: 1px solid black;
        border-left: 1px solid black;
    }
}
`;
const DonateFooterWrapper = styled.div`
background-color: white;
padding:15px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
.donate{
    margin: 20px 0;
}
div{

    width: 100%;
    text-align: end;

    h1{
        cursor: pointer;
        margin:40px 0;
        font-size: 25px;
        font-weight: bolder;
        span{
            img{
                width: 10px;
            }
        }
    }
}
`

function Donate(){
    const [Point, setPoint] = useState(0);
    const [PointYear1, setPointYear1] = useState(0);
    const [PointYear2, setPointYear2] = useState(0);
    const [PointYear3, setPointYear3] = useState(0);
    return (
    <Wrapper>
        <HeaderBox title={"기부내역"}/>
        <DonateWrapper>
            <AllDonate>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/donation.png`}/>
                    <h2>총 기부 금액</h2>
                </div>
                <div>
                    <h1>{Point}P</h1>
                </div>
            </AllDonate>
            <DonateYear>
                <div>
                    <h2>2019년</h2>
                    <h1>{PointYear1}P</h1>
                </div>
                <div>
                    <h2>2018년</h2>
                    <h1>{PointYear2}P</h1>
                </div>
                <div>
                    <h2>2017년</h2>
                    <h1>{PointYear3}P</h1>
                </div>
            </DonateYear>
            <img style={{width:"100%"}}src={`${process.env.PUBLIC_URL}/assets/images/bnr.png`}/>
        </DonateWrapper>
        <DonateFooterWrapper>
            <img className="donate" src={`${process.env.PUBLIC_URL}/assets/images/donation.png`}/>
            <h2>아직 기부 내역이 없습니다.</h2>
            <h2>따뜻한 마음 나누러 가볼까요?</h2>
            <div>
                <h1>기부하러가기 <span><img src={`${process.env.PUBLIC_URL}/assets/images/arrow.png`}/></span></h1>
            </div>
    </DonateFooterWrapper>
    </Wrapper>
        )
}

export default Donate;