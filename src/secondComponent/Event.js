import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
background: #f0f0f0;
width: 360px;

`;

const Header = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme.headerColor};
height: 50px;
font-weight: bolder;
font-size: 19px;
position: relative;

.back{
    position: absolute;
    left:20px;
    cursor: pointer;
    img{
        width: 10px;
        
    }
}
`

const EventWrapper = styled.div`
background-color: white;
padding:15px;
cursor: pointer;

`
const BoxTitle = styled.div`
display: flex;
justify-content: space-between;
font-size: 13px;
margin-bottom: 10px;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        width: 60px;
        background-color: ${(props) => props.situation ==="진행중" ? props.theme.mainColor : "white"};
        color:${(props) => props.situation ==="진행중" ? "white" : "black"};
        border: 1px solid ${(props) => props.situation === '진행중' ? props.theme.mainColor : "black"};
        padding: 5px;
        border-radius: 20px;
        margin-right: 10px;
    }
}
`

const BoxImg = styled.div`
width: 100%;
img{
    width: 100%;
}
`

function EventBox ({situation,title,date}) {
    
    return (
        <EventWrapper>
            <BoxTitle situation={situation}>
                <div>
                    <div>{situation}</div>
                    <p>{title}</p>
                </div>

                <div>
                    <p>{date}</p>
                </div>
            </BoxTitle>
            <BoxImg>
                <img src={`${process.env.PUBLIC_URL}/assets/images/sample.png`}/>
                
            </BoxImg>
        </EventWrapper>
    )
}

function Event(){
    return (
    <Wrapper>
        <Header>
            <h2>이벤트</h2>
            <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
        </Header>
        <EventBox situation={"진행중"} title={"유동 쫄깃 새꼬막살 구매이벤트"} date={"2023-01-09"} />
        <EventBox situation={"마감"} title={"Test 입니다."} date={"2023-01-09"} />
    </Wrapper>)
}

export default Event;