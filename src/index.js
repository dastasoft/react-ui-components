import React from 'react';
import { render } from 'react-dom';

import Playground from './containers/Playground';

import './index.scss';

const App = () => <Playground />;

render(<App />, document.getElementById('root'));
