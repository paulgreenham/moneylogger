import {action, computed, observable} from 'mobx';
import {UserRequester} from '../requests/UserRequester';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Utility from "../Utility";


export class UserStore {

    static TOKEN_COOKIE_NAME = 'token';

    userDetails = observable.object({});

    sanity = action(async () => {
        const response = await UserRequester.userSanity();
        console.log(response)
    });

}