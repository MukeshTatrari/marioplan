import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, rffProps } from './store'
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rffProps}>
        <AuthIsLoaded> 
          <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children
}