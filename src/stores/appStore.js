import {action, computed, observable} from 'mobx';
import {AppRequester} from '../requests/AppRequester';
import {routes} from "../App";
import Utility from "../Utility";


export class AppStore {

    appVar = observable.box("app");

    sanity = action(async () => {
        const response = await AppRequester.appSanity();
        console.log(response)
    });

}