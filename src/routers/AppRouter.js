import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar'
import DashboardPage from "../pages/Dashboard";
import TeamPage from "../pages/Team";
import MemberPage from "../pages/Member";
import FormPage from "../pages/Form"
import 'bootstrap/dist/css/bootstrap.css';

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/team" exact component={TeamPage} />
                    <Route path="/member/:memberId"  component={MemberPage} />
                    <Route path="/form" component={FormPage} />                

                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;

// Route to MemberPage component :path is dynamic to include object :parameter