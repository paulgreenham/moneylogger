import {action, computed, observable} from 'mobx';
import {ExpenseRequest} from '../requests/ExpenseRequest';
import {routes} from "../App";
import Utility from "../Utility";


export class ExpenseStore {

    appVar = observable.box("app");

    sanity = action(async () => {
        const response = await ExpenseRequest.appSanity();
        console.log(response)
    });

}