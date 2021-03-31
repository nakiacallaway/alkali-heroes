import {Route, Switch} from 'react-router-dom';
import Navbar from '../components/Navbar'
import DashboardPage from "../pages/Dashboard";
import MembersPage from "../pages/Member";
import MemberPage from "../pages/Member";

const AppRouter = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                 {/* Switch to designate paths */ }
                <Switch>
                    <Route path="/" exact component={DashboardPage} />
                    <Route path="/heroes"  exact component={MembersPage} />
                    <Route path="/heroes/:memberId"  component={MemberPage} /> 
                </Switch>
            </div>
        </div>
    );
};

export default AppRouter;

// Route to MemberPage component :path is dynamic to include object :parameter