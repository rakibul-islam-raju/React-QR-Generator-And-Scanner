import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import QRImg from '../assets/image/qr.jpg';

const ScanQR = () => {
    // const [scanResultFile, setScanResultFile] = useState('');
    const [scanResultWebCam, setScanResultWebCam] = useState('');
    const [scanDataList, setScanDataList] = useState(new Set());
    const [facingMode, setFacingMode] = useState('environment');

    // const qrRef = useRef(null);

    // const handleScan = (result) => {
    //     console.log('result', result);
    //     if (result) {
    //         setScanResultFile(result);
    //     }
    // };

    // const handleError = (err) => {
    //     console.error(err);
    // };

    // const scanFileHandler = () => {
    //     qrRef.current.openImageDialog();
    // };

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);

            setScanDataList((previousState) => new Set([...previousState, result]));
        }
    };

    const switchCamera = () => {
        if (facingMode === 'environment') {
            setFacingMode('user');
        } else {
            setFacingMode('environment');
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-between mt-3">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">Qcan QR code</div>
                            <div className="card-body">
                                {/* <button
                        onClick={scanFileHandler}
                        className="btn btn-primary mb-3"
                        type="button"
                    >
                        Scan
                    </button> */}
                                {/* <QrReader
                        ref={qrRef}
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ width: '100%' }}
                        showViewFinder
                        legacyMode
                    />
                    <p>Scanned Code: {scanResultFile}</p>
                    <hr /> */}
                                <button
                                    onClick={switchCamera}
                                    type="button"
                                    className="btn btn-purple w-100 mb-2"
                                >
                                    <i className="fas fa-camera me-3" />
                                    Switch Camera
                                </button>
                                <QrReader
                                    // ref={qrRef}
                                    delay={1000}
                                    onError={handleErrorWebCam}
                                    onScan={handleScanWebCam}
                                    style={{ width: '100%' }}
                                    facingMode={facingMode}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {scanDataList.size > 0 ? (
                                    <>
                                        <h5>
                                            Scanned Code With Webcam: <b>{scanResultWebCam}</b>
                                        </h5>

                                        <div className="p-2 border border-secondary rounded mt-4">
                                            <h5>
                                                {Array.from(scanDataList).map((item) => (
                                                    <span className="badge bg-purple">{item}</span>
                                                ))}
                                            </h5>
                                        </div>
                                    </>
                                ) : (
                                    <img className="img-fluid" src={QRImg} alt="qr-scanner" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScanQR;
