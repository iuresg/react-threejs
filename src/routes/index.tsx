import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import Pages from '../pages'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Pages.Home} />
                <Route path="/test" component={Pages.Test} />
            </Switch>
        </Router>
    )
}