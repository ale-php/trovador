import 'preact-material-components/style.css';
import './style';
import App from './components/app';
import { Provider } from 'preact-redux';
import store from './reducers/store';


export default () => (
    <Provider store={store}>
        <App />
    </Provider>
);
