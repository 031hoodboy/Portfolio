import React from 'react';
import styled from 'styled-components';
import {Title, Subtitle} from '../components/ContentsAtoms';
import ProfileImage from '../images/ZEPETO_CAPTURE.png';
import PageWrapper from '../components/PageWrapper';
import PlusImage from '../images/plus.png';
import CodeImage from '../images/code.png';
import CodeAnimation from '../components/CodeAnimation';

const Profile = () => {
    return (
        <PageWrapper>
        <ProfileBlock>
            <ProfileImg/>
            <PlusImg/>
            {/* <CodeImg/> */}
            <CodeAnimation/>
        </ProfileBlock>
        <IntroduceBlock>
            <Title>HoodBoy</Title>
            <Subtitle>Now you can use the React Boilerplate as a Create React</Subtitle>
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

const PlusImg = styled(ProfileImg)`    
    width: 50px;
    height: 50px;
    min-width: 30px;
    min-height: 30px;
    background-image: url(${PlusImage});
`;

const CodeImg = styled(ProfileImg)`
    width: 200px;
    height: 200px;
    min-width: 150px;
    min-height: 150px;
    background-image: url(${CodeImage});
`;

const IntroduceBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 3vw;
    text-align: center;
`;
