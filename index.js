import React from 'react';
import { render } from "react-dom";

import Tabs from './comp/Tabs';
import Button from './comp/Buttons';
import TButton from './comp/TButton';
import App from './logic/App';
import Dash from './logic/Dashboard';
import MyForm from './comp/Form';
require('./style.css');

const container = document.createElement('div');
document.body.appendChild(container);
render(<Dash/>, container);
