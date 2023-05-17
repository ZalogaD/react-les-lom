import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

//const div = document.createElement('div')

//const root = document.getElementById('root')
//root.append(div) 

const paragraph = React.createElement('p', //1 параметр 
{
  id: 'test-P-Id',            //2 параметр - об'єкт
  children: ['I am P'],      //все що буде йти з 3го параиетру, авто залетить в чилдрин
})

const div = React.createElement('div', {
  name: 'main',
  id: 'test-Id',                 //другий аргумент
  className: 'test-class',
  children: paragraph,       //paragraph це перенесена пишка з 12р
} )                      //після аргументів завжди йдуть діти

console.log('div :>>', div)  //react element

ReactDOM.createRoot(document.getElementById('root')).render(div)


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>

 // </React.StrictMode>
//);