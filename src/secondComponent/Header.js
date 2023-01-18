import { Link,useRouteMatch } from "react-router-dom"
import styled from "styled-components"

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

function HeaderBox({title}) {
    return(
        <Header>
            <h2>{title}</h2>
            <Link to="/" className="back"><img src={`${process.env.PUBLIC_URL}/assets/images/back_home.png`}/></Link>
        </Header>
    )
}

export default HeaderBox;