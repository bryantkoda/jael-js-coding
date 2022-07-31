import fs from 'fs';
import _ from 'lodash';

const routes = (app) => {
  const getRandomQuestions = (req, res) => {
    const data = fs.readFileSync('./data/questions.json');
    const questions = JSON.parse(data);
  
    const randomizedQuestions = _.sampleSize(questions.results, 10);
  
    res.send(randomizedQuestions);
  }

  app.get('/questions', getRandomQuestions);
}

export default routes;
