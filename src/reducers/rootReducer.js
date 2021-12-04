import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducer from "./ProjectReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;