import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '../hooks/useStores';
import {language} from '../content/language'

export const Home = observer(() => {
    const {generalStore, userStore, appStore} = useStores();

    const content = language[generalStore.language];

    return (
        <div>
            {content.APP_TEMPLATE}
            {console.log("General variable: ", generalStore.generalVar.get())}
            {console.log("User details: ", userStore.userDetails)}
            {console.log("App variable: ", appStore.appVar.get())}
        </div>
    )
});