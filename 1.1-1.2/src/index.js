import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = (props) => {
  return (
    <div>
      <h1>{props.curso}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <h1>
        {props.parte}
        {props.ejercicio}
      </h1>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <h1>Number of exercises {props.totalExercises} </h1>
    </div>
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
    <div>
      <Header curso={course} />
      <Content parte={part1} ejercicio={exercises1} />
      <Content parte={part2} ejercicio={exercises2} />
      <Content parte={part3} ejercicio={exercises3} />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
