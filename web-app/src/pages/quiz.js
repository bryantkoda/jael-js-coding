import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { connect } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import HomeLogo from '../images/logo.png';
import { ReactComponent as TrueIcon } from '../images/trueBtn.svg';
import { ReactComponent as FalseIcon } from '../images/falseBtn.svg';
import * as actions from '../modules/questions/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 700px;
  max-width: 100%;
  margin: 0 auto;
  height: 500px;
  padding: 2rem;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(11, 113, 145, 0.15);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-family: 'Inter';
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E3E3E3;
  width: 100%;
  padding-bottom: 10px;
  > p {
    margin: 10px 0;
  }
`;

const QuizLogo = styled.img`
  height: 60px;
`;

const Category = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 30px;
`;

const Page = styled.p`
  width: 65px;
  text-align: center;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 500px;
  font-weight: 500;
  font-size: 50px;
`;

const ActionsContainer = styled.div`
  display: flex;
  border-top: 1px solid #E3E3E3;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 50px;
  font-size: 20px;
  margin: 20px 10px 0;
  color: #ffffff;
  background-color: ${props => props.trueBtn ? "#4FBD1B" : "#E04E10"};
  cursor: pointer;
  > span {
    margin-left: 20px;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const Text = styled.span``;

const QuizPage = (props) => {
  const { questions, currentIndex, isLoading, getQuestions, setAnswer, setCurrentIndex } = props;
  const navigate = useNavigate();
  const [questionList, setQuestionList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const initialState = {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [],
  }

  const [selectedItem, setSelectedItem] = useState(initialState);

  useEffect(() => {
    getQuestions();
  }, []);

  useEffect(() => {
    setQuestionList(questions);
  }, [questions]);

  useEffect(() => {
    setSelectedIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (questionList && questionList.length !== 0) {
      console.log(questionList.length);
      console.log(selectedIndex);
      if (questionList.length <= selectedIndex) navigate('../results');
      else setSelectedItem(questionList[selectedIndex])
    }
  }, [selectedIndex, questionList]);


  const handleClick = (data) => {
    setAnswer(data);
    setCurrentIndex(selectedIndex + 1);
  }

  return (
    <Container>
      {isLoading && (
        <LoaderContainer>
          <CircularProgress />
        </LoaderContainer>
      )}
      {selectedItem && (
        <>
          <HeaderContainer>
            <QuizLogo src={HomeLogo} /> 
            <Category>{selectedItem?.category}</Category>
            <Page>{selectedIndex + 1} of {questionList?.length || 0}</Page>
          </HeaderContainer>
          <ContentContainer dangerouslySetInnerHTML={{__html: selectedItem?.question}} />
          <ActionsContainer>
            <StyledButton trueBtn onClick={() => handleClick("True")}>
              <TrueIcon />
              <Text>True</Text>
            </StyledButton>
            <StyledButton onClick={() => handleClick("False")}>
              <FalseIcon />
              <Text>False</Text>
            </StyledButton>
          </ActionsContainer>
        </>
      )}
    </Container>
  )
}

const mapStateToProps = (state) => ({
  questions: state.question.questionList,
  isLoading: state.question.isLoading,
  currentIndex: state.question.currentIndex,
});

const mapDispatchToProps = {
  getQuestions: actions.getQuestions,
  setAnswer: actions.setAnswer,
  setCurrentIndex: actions.setCurrentIndex,
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(QuizPage);
