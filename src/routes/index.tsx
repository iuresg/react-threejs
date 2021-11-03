import {
    Switch,
    Route,
    Router
    // Link
} from "react-router-dom";
import { createBrowserHistory } from 'history'
import Pages from '../pages'


export default function Routes() {
    const history = createBrowserHistory()
    return (

        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Pages.Home} />
                <Route path="/simple-plane" component={Pages.SimplePlane} />
                <Route path="/minecraft" component={Pages.Minecraft} />
            </Switch>
        </Router>
    )
}