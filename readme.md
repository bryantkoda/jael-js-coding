# Koda JavaScript Coding Challenge

## Overview

Your challenge is to create a simple, 10 question, true or false, trivia app in the technology you are familiar with. While the problem you are working on is simple, you should treat this like a real world application. This is a chance to show off your abilities and impress.

**What we are looking for through this challenge:**

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

## Goals

Implement the screens based on the wireframes and api below using advanced techniques and industry best practices for your platform. Note that the wireframes may not be complete, so use your best judgment for UI/UX implementation. **Do not use a boilerplate like React Boilerplate for this challenge.** We want to see how you structure your project and what tooling you use from scratch. Create react app is fine to use.

## Steps

#### 1. Fork this repo and use web-app folder as code boilerplate to start
#### 2. Server:
Please setup a node.js server to load data from `server/data/questions.json` and serve as an api for the frontend

#### 3. UI requirement:
We provide the design for the trivia app. You can check the figma file [here](https://www.figma.com/file/jv7BCh5IYu6xovF6zHy8Ab/Koda-React-Coding-Test?node-id=0%3A1). You don't need to follow exactly the same if you do not have enough time. We want to see your general HTML/CSS skills and how you behavior when converting a design into a real product. `(Logo and background image are located in web-app/src/images)`

### Intro / Home Screen:

![The Intro screen for the app](screenshots/intro.png "The Intro screen for the app")

- Static Text
- BEGIN button navigates to the Quiz screen and starts the Quiz

### Quiz Screen:

![The Quiz screen for the app](screenshots/quiz-detail.png "The Quiz screen for the app")

- The headline is from question category
- The card element contains the current question
- The next question should appear after the current question is answered True or False
- After all questions have been answered, navigate to the Results Screen

### Results screen:

![The Results screen for the app](screenshots/result.png "The Results screen for the app")

- The Score shows correct and total
- Displays a list of the questions and whether the answer was correct or not
- PLAY AGAIN starts over with new questions and navigates to the Home Screen

## Submission

Please use git for version control and platforms like Github to host the repository. Once you have finished your challenge, send us the repository url. It would be even better if you can have a documentation for how to run your code in our environment.
