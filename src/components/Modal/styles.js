import styled from 'styled-components'


export const Container = styled.div`
background-color: #000;
width: 70%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: fixed;
padding: 50px;
max-width: 1200px;


iframe {
    border: none;
}
`

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0, 0, 0, 0.7);
position: absolute;
display: flex;
align-items: center;
justify-content: center;

button {
    background-color: red;
    color: white;
    border-radius: 9%;
    border: none;
    cursor: pointer;
    font-size: 28px;
    margin-bottom: 20px;
    width: 30px;
    margin-left: auto;
}
`

