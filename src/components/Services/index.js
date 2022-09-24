import React from 'react'
import Icon1 from '../../images/creditCard.svg';
import Icon2 from '../../images/dataChart.svg';
import Icon3 from '../../images/roadMap.svg';
// import Icon4 from '../../images/checks.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>We help reduce your fees and increase your overall revenue</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Free Consultation</ServicesH2>
          <ServicesP>Have access to consultants ready to help you save money.</ServicesP>
        </ServicesCard> */}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services