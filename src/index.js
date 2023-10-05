import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {Header} from './App';

// const text = 'Hello World!';

// const elem = (
//   <div>
//     <h2>Text: {text}</h2>
//     <input type="text" />
//     <button>Click</button>
//   </div>
// );

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!');

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: 'Hello World!'
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>,
);

