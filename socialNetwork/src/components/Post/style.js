import styled from 'styled-components'

export const ContainerPost = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;

.headerProfile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: 'Nexa Bold';
    cursor: pointer;
}
.iconPoint {
    color: #A09B9B;
}
.container-header {
    display: flex;
    flex-direction: column;
}
.button-header {
    margin-left: 18rem;
}
`;
export const NameProfile = styled.p`
font-weight: bolder;
color: black;
font-size: 1rem;
`;
export const Box = styled.div`
border: 1px solid rgba(212, 212, 212,0.8);
padding: 1rem;
height: 20rem;
width: 50%;
background-color: #EDEDED;
display: flex;
flex-direction:column;
align-items: start;
.icon-global {
    margin-left: 3.4rem;
    margin-right: 0.5rem;
    color: #A09B9B;
}
.sub-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}
`;
export const ContentArea = styled.div`
width: 100%;
height: 100%;
background-color: rgba(212,212,212,0.5);
`;
export const Reactions = styled.div` 
width: 100%;
height: 2rem;
background-color: #EDEDED;
display: flex;
align-items: center;
justify-content: start;
.container-reacts {
    display: flex;
    align-items: center;
}
.react-icon {
    cursor: pointer;
    margin:0 0.5rem;
    font-size: 1.2rem;
}
`;