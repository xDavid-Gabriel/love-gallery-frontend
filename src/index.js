import './index.css';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);

reportWebVitals();
