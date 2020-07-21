import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TaskPro from "./TaskPro";

ReactDOM.render(
  <React.StrictMode>
    <TaskPro />
  </React.StrictMode>,
  document.getElementById('content')
);

serviceWorker.unregister();
