import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import store from './store';
import { Provider } from 'react-redux';

import HomePage from './pages/home';
import QuizPage from './pages/quiz';
import ResultsPage from './pages/results';
import BackgroundImg from './images/bg.png';

const AppContainer = styled.div`
  background-color: #eee;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<QuizPage />} path="/quiz" />
            <Route element={<ResultsPage />} path="/results" />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </Provider>
  )
}

export default App
