import {action, computed, observable} from 'mobx';
import {GeneralRequester} from '../requests/GeneralRequester';
import {languages} from '../enums';
import {routes} from "../App";
import Utility from "../Utility";


export class GeneralStore {

    generalVar = observable.box("general");
    langDir = observable.box("ltr");
    language = observable.box(languages.ENGLISH);

    sanity = action(async () => {
        const response = await GeneralRequester.generalSanity();
        console.log(response)
    });

    switchLanguage = action(language => {
        this.language = language;
        if (language === "hebrew" || language === "arabic") {
            this.langDir = "rtl"
        } else this.langDir = "ltr"
    });
}