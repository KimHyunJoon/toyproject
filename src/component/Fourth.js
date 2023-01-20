import styled from "styled-components";

const Wrapper = styled.div`
    margin: 15px 0px;
    background-color: white;
`;

const Box  =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 10px;
border-top :0.1px solid #f0f0f0;
height: 50px;
div{
    
    :first-child{
        display: flex;
        img{
            margin-right: 10px;
        }
    }
}
`

function Fourth(){
    return (<Wrapper>
        
    </Wrapper>)
}

export default Fourth;