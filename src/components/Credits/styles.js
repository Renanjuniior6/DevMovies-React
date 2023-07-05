import styled from 'styled-components'


export const Container = styled.div`
display: flex;
margin-top: 30px;
gap: 10px;

@media screen and (max-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

}

div {
    display: flex;
    flex-direction: column;
}

p {
 color: #ffffff;
 font-weight: 600;

 @media screen and (max-width: 600px) {
    width: 80px;
    

}
}

img {
    height: 200px;
}

`
export const Title = styled.h4`
color: #ffffff;
font-size: 28px;
font-weight: 700;
`

export const ContainerSimilar = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
padding: 20px;
width: 100%;

div {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    height: 100%;
    margin: 20px 0;
}


h4 {
    color: #ffffff;
    font-weight: 26px;
    margin-bottom: 10px;
}

iframe {
    border: none;
}

`


