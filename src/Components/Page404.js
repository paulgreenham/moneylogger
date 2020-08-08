import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '../hooks/useStores';
import {language} from "../content/language";

export const Page404 = observer(() => {
    const {generalStore} = useStores();
    const content = language[generalStore.language];

    return (
        <div>
            404 PAGE NOT FOUND
            <div>
                <a href='/'>{content.GO_BACK_HOME} -> </a>
            </div>
        </div>
    )
});