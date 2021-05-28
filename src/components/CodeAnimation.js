import React from 'react';
import Aos from "aos"
import "aos/dist/aos.css";
import styled from 'styled-components';
import Bar1Img from '../images/Bars/bar1.png';
import Bar2Img from '../images/Bars/bar2.png';
import Bar3Img from '../images/Bars/bar3.png';
import Bar4Img from '../images/Bars/bar4.png';
import Bar5Img from '../images/Bars/bar5.png';
import Bar6Img from '../images/Bars/bar6.png';
import Bar7Img from '../images/Bars/bar7.png';
import Bar8Img from '../images/Bars/bar8.png';
import Bar9Img from '../images/Bars/bar9.png';

const CodeAnimation = () => {
    React.useEffect(() => {
        Aos.init({});
      }, [])
    return (
        <Wrapper>
            <div data-aos="fade-right" data-aos-duration="500" >
                <Bar1/>
            </div>
            <div data-aos="fade-right" data-aos-duration="600" >
                <Bar2/>
            </div>
            <div data-aos="fade-right" data-aos-duration="700" >
                <Bar3/>
            </div>
            <div data-aos="fade-right" data-aos-duration="800" >
                <Bar4/>
            </div>
            <div data-aos="fade-right" data-aos-duration="900" >
                <Bar5/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000" >
                <Bar6/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1100" >
                <Bar7/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1200" >
                <Bar8/>
            </div>
            <div data-aos="fade-right" data-aos-duration="1300" >
                <Bar9/>
            </div>
        </Wrapper>
    );
}

export default CodeAnimation;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 123px;
    height: 135px;
    padding: 0 3vw;
    min-width: 123px;
    min-height: 135px;
    @media (max-width: 560px) {
        padding: 0 5vw;
  }
`;

const Bar1 = styled.div`
    width: 123px;
    height: 15px;
    background-image: url(${Bar1Img});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Bar2 = styled(Bar1)`
    background-image: url(${Bar2Img});
`;

const Bar3 = styled(Bar1)`
    background-image: url(${Bar3Img});
`;

const Bar4 = styled(Bar1)`
    background-image: url(${Bar4Img});
`;

const Bar5 = styled(Bar1)`
    background-image: url(${Bar5Img});
`;

const Bar6 = styled(Bar1)`
    background-image: url(${Bar6Img});
`;

const Bar7 = styled(Bar1)`
    background-image: url(${Bar7Img});
`;

const Bar8 = styled(Bar1)`
    background-image: url(${Bar8Img});
`;

const Bar9 = styled(Bar1)`
    background-image: url(${Bar9Img});
`;
