import {action, computed, observable} from 'mobx';
import {UserRequest} from '../requests/UserRequest';
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';
import Utility from "../Utility";


export class UserStore {

    static TOKEN_COOKIE_NAME = 'token';

    userDetails = observable.object({});

    sanity = action(async () => {
        const response = await UserRequest.userSanity();
        console.log(response)
    });

}