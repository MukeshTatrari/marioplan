import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import { getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import firebaseConfig from '../config/firebaseConfig'
import firebase from 'firebase/compat/app'
import { createFirestoreInstance } from 'redux-firestore'

export const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    ));

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}
export const rffProps = {
    firebase,
    config: rrfConfig, firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

export default store