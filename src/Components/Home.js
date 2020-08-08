import React from 'react';
import {observer} from 'mobx-react-lite';
import {useStores} from '../hooks/useStores';
import {language} from '../content/language'

export const Home = observer(() => {
    const {generalStore} = useStores();

    const content = language[generalStore.language];

    return (
        <div>
            {content.APP_TEMPLATE}
        </div>
    )
});