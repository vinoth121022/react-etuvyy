import React from 'react';
import { render } from "react-dom";

import Tabs from './comp/Tabs';
import Button from './comp/Buttons';
import App from './logic/App';
require('./styles.css');

const container = document.createElement('div');
document.body.appendChild(container);
render(<App />, container);
