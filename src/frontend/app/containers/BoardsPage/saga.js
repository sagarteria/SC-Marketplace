// import { take, call, put, select } from 'redux-saga/effects';
import {takeLatest, call, put, select} from 'redux-saga/effects';
//import request from "../../utils/request";
import {METABASE_TOKEN_FETCH} from "./constants";
// import {
//     customerMasterSearchDataFetch,
//     customerMasterSearchDataFetchFail,
//     customerMasterSearchDataFetchSuccess
// } from "./actions";

export default function* metabaseTokenSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(METABASE_TOKEN_FETCH );
}


export function* metabaseTokenFetchSaga() {
    const apiUrl = "https://sca-dev-metabase.azurewebsites.net/";
    try {
        // const data = yield call(request, apiUrl,
        //     {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json",
        //             // "x-functions-key": customerMasterSearchDataApiKey
        //             //"Authorization": `Bearer ${token}`
        //         },
        //         body: JSON.stringify({username: "admin@xyz.com", password: "mars@123" })
        //     });

    } catch (e) {
        if (e.response && e.response.status === 401) {
            
        }
    }
}
