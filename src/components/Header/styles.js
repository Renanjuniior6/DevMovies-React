import styled from 'styled-components'

export const Container = styled.div`
min-height: 100px;
z-index: 999;
position: fixed;
top: 0;
display: flex;
padding: 5px 50px;
justify-content: space-between;
align-items: center;
background: ${props => props.changeBackground ? '#000' : 'transparent'};
transition: background-color 0.6s ease-in-out;

img {
   
    width: 25%;
}
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px;
`

export const Li = styled.li`
font-weight: 600;
font-size: 28px;
cursor: pointer;
position: relative;

a {
    text-decoration: none;
    color: #ffffff;
}

&::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #189b20;
    position: absolute;
    bottom: -10px;
    left: 50%; /*ou left: 0; */
    transform: translateX(-50%); /* opcional*/
    transition: width 0.5s ease-in-out;
}

&:hover::after {
    width: 100%;
}
`



