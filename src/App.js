import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateQR from './components/GenerateQR';
import Navbar from './components/Navbar';
import ScanQR from './components/ScanQR';

function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <GenerateQR />
                    </div>
                    <div className="col-md-6">
                        <ScanQR />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
