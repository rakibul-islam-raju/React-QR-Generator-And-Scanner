import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ScanQR from './components/ScanQR';

function App() {
    return (
        <div className="App">
            <Navbar />

            <ScanQR />
        </div>
    );
}

export default App;
