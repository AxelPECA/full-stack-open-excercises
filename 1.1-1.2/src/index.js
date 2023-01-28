import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  console.log(props)
  return (
    <>
      <h1>{props.curso}</h1>
    </>
  );
};

const Part = (props) => {
  console.log(props)
  return (
    <>
      <p>
        {props.part} {props.excercise}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.part1} excercise={props.exercise1} />
      <Part part={props.part2} excercise={props.exercise2} />
      <Part part={props.part3} excercise={props.exercise3} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <h2>Number of exercises {props.totalExercises} </h2>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <>
      <Header curso={course} />
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </>
  );
};

export default App;
ReactDOM.createRoot(document.getElementById('root')).render(<App />);