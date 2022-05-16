import readlineSync from 'readline-sync';

const runGreetings = () => {
  console.log('Добро пожаловать в интеллектные игры!');

  const userName = readlineSync.question('Могу я узнать ваше имя? -> ');

  console.log(`Привет, ${userName}!`);
  
  //return userName;
};

//console.log(runGreetings());

export default runGreetings;