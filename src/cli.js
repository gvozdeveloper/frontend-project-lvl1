import readlineSync from 'readline-sync';

const runGreetings = () => {
  console.log('Welcome to mind games!');

  const userName = readlineSync.question('May I know your name? -> ');

  console.log(`Hello, ${userName}!`);
  
  //return userName;
};

//console.log(runGreetings());

export default runGreetings;