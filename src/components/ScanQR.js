import React, { useRef, useState } from 'react';
import QrReader from 'react-qr-reader';

const ScanQR = () => {
    const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const qrRef = useRef(null);

    const handleScan = (result) => {
        console.log('result', result);
        if (result) {
            setScanResultFile(result);
        }
    };

    const handleError = (err) => {
        console.error(err);
    };

    const scanFileHandler = () => {
        qrRef.current.openImageDialog();
    };

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    };

    return (
        <div>
            <div className="card">
                <div className="card-header">Qcan QR code</div>
                <div className="card-body">
                    <button
                        onClick={scanFileHandler}
                        className="btn btn-primary mb-3"
                        type="button"
                    >
                        Scan
                    </button>
                    <QrReader
                        ref={qrRef}
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                        legacyMode
                    />
                    <p>Scanned Code: {scanResultFile}</p>
                    <hr />
                    <QrReader
                        // ref={qrRef}
                        delay={300}
                        onError={handleErrorWebCam}
                        onScan={handleScanWebCam}
                        style={{ width: '100%' }}
                    />
                    <p>Scanned Code with webcam: {scanResultWebCam}</p>
                </div>
            </div>
        </div>
    );
};

export default ScanQR;
