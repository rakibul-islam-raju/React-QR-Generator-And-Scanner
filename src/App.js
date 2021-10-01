import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GenerateQR from './components/GenerateQR';
import Navbar from './components/Navbar';
import ScanQR from './components/ScanQR';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={GenerateQR} />
                    <Route exact path="/scanner" component={ScanQR} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
