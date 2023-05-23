import styled from "styled-components";
import { Button } from "antd";

export const NavigationWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center:
padding-top: 1rem;
padding-bottom: 1rem;

    width: 100%;
    position: sticky;
    top: 0px;
    background-color: rgba(255, 255, 255, 0.75);
    z-index: 10;

    &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        box-shaadow: rgba(6,5,50,0.1) 0px 0px 30px;
    }
    

`
export const Logo = styled.div`
font-size: 30px;
`
export const ButtonCart = styled(Button)`
color: white;
background-color: gold ;
&:hover{
    background-color: #DEE13B;
    border-color: #DEE13B!important;
}
&:hover span{
    color:white;
}
`
export const RightNavigation = styled.div`
display: flex;
gap:10px;
align-items: center;
`