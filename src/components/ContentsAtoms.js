import styled from 'styled-components';

export const Title = styled.span`
    font-size: 42px;
    font-weight: 700;
    color: #fff;
    padding: 5px;
`;

export const Subtitle = styled.span`
    font-size: 1.7vw;
    color: #b5b5b5;
    padding: 10px;
    @media (max-width: 1024px) {
        font-size: 2vw;
  }
    @media (max-width: 560px) {
        font-size: 5vw;
  }
`;

export const TitleBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 560px) {
        width: 90%;
        margin: 0 auto;
  } 
`;

export const Content = styled.div`
    margin-top: 2vh;
    color: #fff;
`;

export const InfoBlock = styled.div`
    padding: 5vh 0;
    margin-left: 3vw;
`;

