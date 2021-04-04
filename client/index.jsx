/*import React from 'react';
import ReactDOM from 'react-dom';
//import bar from './bar.js.js';
// Import de l'image
//import LOGO from '<path-to-file>/logo.png';
// Utilisation
//<img src={LOGO} alt="Logo" />
const Index = () => {
  return <div>TIW 8 TP1!</div>;
};
ReactDOM.render(<Index />, document.getElementById('root'));
bar();*/
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import Content from './components/Content/index.jsx';
const Index = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));