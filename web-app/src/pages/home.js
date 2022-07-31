import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';

import HomeLogo from '../images/logo.png';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import * as actions from '../modules/questions/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  height: 455px;
  padding: 2rem;
  background: #ffffff;
  box-shadow: rgba(11, 113, 145, 0.15) 0px 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
`;

const QuizLogo = styled.img`
  height: 100px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 40px;
  margin-bottom: 0;
`;

const ContentContainer = styled.div`
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 22px;
`;

const Score = styled.p`
  color: #ffffff;
  background-color: #2AA2DE;
  font-size: 50px;
  text-align: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  border-top: 1px solid #E3E3E3;
  justify-content: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: 30px;
  margin-top: 20px;
`;

const StyledSpan = styled.span`
  margin-right: 10px;
  color: #000000;
`;

const HomePage = (props) => {
  const { resetQuestions } = props;

  useEffect(() => {
    resetQuestions();
  }, []);

  return (
    <Container>
      <QuizLogo src={HomeLogo} />
      <Title>Welcome to  the Trivia Challenge!</Title>
      <ContentContainer>
        <Description>You will be presented with 10 True or False questions.</Description>
        <Score>Can you score 100%?</Score>
      </ContentContainer>
      <ActionsContainer>
        <StyledLink to="quiz">
          <StyledSpan>BEGIN</StyledSpan>
          <ArrowIcon />
        </StyledLink>
      </ActionsContainer>
    </Container>
  )
}

const mapDispatchToProps = {
  resetQuestions: actions.resetQuestions,
}

const connector = connect(null, mapDispatchToProps);

export default connector(HomePage);
