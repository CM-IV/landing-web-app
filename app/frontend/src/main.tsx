import { render } from 'preact'
import App from './app'
import './styles/mystyles.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3333/api'

render(<App />, document.body);
