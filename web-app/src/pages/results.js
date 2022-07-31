import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import styled from 'styled-components';

import HomeLogo from '../images/logo.png';
import { ReactComponent as ArrowIcon } from '../images/arrow.svg';
import { ReactComponent as CorrectIcon } from '../images/correctIcon.svg';
import { ReactComponent as IncorrectIcon } from '../images/incorrectIcon.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 1170px;
  max-width: 100%;
  margin: 100px 0;
  padding: 2rem;
  background: #ffffff;
  box-shadow: rgba(11, 113, 145, 0.15) 0px 0px 20px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E3E3E3;
  width: 100%;
  padding-bottom: 10px;
`;

const QuizLogo = styled.img`
  height: 60px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 30px;
  margin: 0 188px;
`;

const ScoreContainer = styled.p`
  color: #ffffff;
  background-color: ${props => props.score > 5 ? "#4FBD1B" : "#DE8B2A"};
  font-size: 50px;
  text-align: center;
  padding: 10px 40px;
`;

const ActionsContainer = styled.div`
  display: flex;
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

const ListContainer = styled.ol`
  border-top: 1px solid #E3E3E3;
  margin: 0 auto;
`;

const QuestionList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dashed #E3E3E3;
  margin: 10px 0;
`;

const QuestionContainer = styled.div`
  width: 90%;
`;

const Question = styled.div``;

const QuestionDescription = styled.p`
  font-style: italic;
  font-size: 14px;
  color: #a5a5a5;
`;

const AnswerContainer = styled.span`
  color: ${props => props.answer === "True" ? "#69BC00" : "#E23232"};
`;

const ResultsPage = (props) => {
  const { questions, answers } = props;

  const score = questions.map((q, i) => { return q.correct_answer === answers[i] }).filter(value => value === true).length;

  return (
    <Container>
      <HeaderContainer>
        <QuizLogo src={HomeLogo} /> 
        <Title>Final Results</Title>
      </HeaderContainer>
      <ScoreContainer score={score}>You scored {score}/{questions.length}</ScoreContainer>
      <ListContainer type="1">
        {questions.map((q, i) => {
          return (
            <QuestionList>
              <QuestionContainer>
                <Question dangerouslySetInnerHTML={{__html: q.question}} />
                <QuestionDescription>
                  The correct answer is <AnswerContainer answer={q.correct_answer}>{q.correct_answer}</AnswerContainer>.
                  You answered <AnswerContainer answer={answers[i]}>{answers[i]}</AnswerContainer>
                </QuestionDescription>
              </QuestionContainer>
              {q.correct_answer === answers[i] ? <CorrectIcon /> : <IncorrectIcon />}
            </QuestionList>
          );
        })}
      </ListContainer>
      <ActionsContainer>
        <StyledLink to="/">
          <StyledSpan>Play again</StyledSpan>
          <ArrowIcon />
        </StyledLink>
      </ActionsContainer>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  questions: state.question.questionList,
  answers: state.question.answers,
});

const connector = connect(mapStateToProps, null);

export default connector(ResultsPage);

