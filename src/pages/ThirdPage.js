import React from 'react';
import styled from 'styled-components';
import PageWrapper from '../components/PageWrapper';
import {Title, Subtitle, TitleBlock} from '../components/ContentsAtoms';

const Profile = () => {
    return (
        <PageWrapper>
        <TitleBlock>
            <Title>Projects</Title>
            <Subtitle>Crafted for highly scalable, easily maintainable and highly performant React.js applications with a focus on best DX and best practices.</Subtitle>

        </TitleBlock>
        </PageWrapper>
    );
}

export default Profile;



const TechBlock = styled.div`
    padding: 5vh 0;
    margin-left: 3vw;
`;

