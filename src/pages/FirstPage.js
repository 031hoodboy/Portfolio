import React from 'react';
import styled from 'styled-components';
import {Title, Subtitle} from '../components/ContentsAtoms';
import ProfileImage from '../images/ZEPETO_CAPTURE.png';
import HoonImage from '../images/hoon.jpg';
import PageWrapper from '../components/PageWrapper';
import PlusImage from '../images/plus.png';
import CodeAnimation from '../components/CodeAnimation';

const Profile = () => {
    return (
        <PageWrapper>
            <ProfileBlock>
                <ProfileImg/>
                <PlusImg/>
                <HoonImg/>
            </ProfileBlock>
            <IntroduceBlock>
                <Title>김태철</Title>
                <Subtitle>4.16교육혁명은 자기 통찰로부터 출발하여 심리적 욕망을 바꾸는 사상운동이며 학생,학부모,선생님이 모두 웃는 하하하교육혁명으로 스며들어야 한다.</Subtitle>
            </IntroduceBlock>
        </PageWrapper>
    );
}

export default Profile;

const ProfileBlock = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    padding: 3vw 0;
    @media (max-width: 560px) {
        width: 90%;
  }
`;

const ProfileImg = styled.div`
    width: 200px;
    height: 200px;
    min-width: 150px;
    min-height: 150px;
    background-image: url(${ProfileImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HoonImg = styled(ProfileImg)`
    height: 150px;
    margin-top: auto;
    background-image: url(${HoonImage});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PlusImg = styled(ProfileImg)`    
    width: 50px;
    height: 50px;
    min-width: 30px;
    min-height: 30px;
    background-image: url(${PlusImage});
`;

const IntroduceBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3vw;
    text-align: center;
`;
