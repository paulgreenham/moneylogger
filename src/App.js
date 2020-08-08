import React, {useState, useEffect} from 'react';
import './App.scss';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {observer} from 'mobx-react-lite';
import ScaleLoader from "react-spinners/ScaleLoader";
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';

import {useStores} from './hooks/useStores';
import {Home} from './Components/Home';
import {Page404} from './Components/Page404';

const history = createBrowserHistory();

export const routes = {
    ROOT: '/',
    NOT_FOUND: '/404'
};

const App = observer(() => {
    const {generalStore} = useStores();
    const langDir = generalStore.langDir;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.classList.add(langDir);
    });

    const theme = createMuiTheme({});

    return (<ThemeProvider theme={theme}>
        {loading
            ? <div className="spinner">
                <ScaleLoader
                    loading={loading}
                    height={75}
                    width={10}
                    radius={5}
                    margin={3}
                    color="#0792B1"
                />
            </div>
            : <Router history={history}>
                <div className={`App ${langDir}`}>
                    <Switch>
                        <Route exact path={routes.NOT_FOUND} component={Page404}/>
                        <Route exact path={routes.ROOT} component={Home}/>
                        <Redirect to={routes.NOT_FOUND}/>
                    </Switch>
                </div>
            </Router>
        }
    </ThemeProvider>)
});

export default App;
