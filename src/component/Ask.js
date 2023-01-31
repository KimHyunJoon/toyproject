import styled from "styled-components";


const Wrapper = styled.div`
    background-color: white;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Question = styled.div`
width: 90%;
height: 50px;
border-radius: 30px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
h2{
    font-weight: bolder;
}
`


function Ask(){
    return(<Wrapper>
        <Question><h2>문의하기</h2></Question>
    </Wrapper>)
}

export default Ask;