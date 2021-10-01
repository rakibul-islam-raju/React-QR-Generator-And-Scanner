import QRCode from 'qrcode';
import React, { useState } from 'react';
import QRImg from '../assets/image/qr.jpg';

const GenerateQR = () => {
    const [text, setText] = useState('');
    const [imgUrl, setImgUrl] = useState('');

    const generateQR = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImgUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    const qrImageMarkup = (
        <div className="card text-center">
            <div className="card-body">
                {imgUrl ? (
                    <>
                        <img src={imgUrl} className="img-thumbnail mb-4" alt="qr-eneratoe" />
                        <div className="card-footer">
                            <a href={imgUrl} download className="btn btn-purple w-100">
                                <i className="fas fa-download me-3" />
                                Download QR
                            </a>
                        </div>
                    </>
                ) : (
                    <>
                        <img src={QRImg} className="img-fluid" alt="qr-eneratoe" />
                    </>
                )}
            </div>
        </div>
    );

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Generate QR code</div>
                        <div className="card-body">
                            <textarea
                                cols="30"
                                rows="5"
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter text"
                                className="form-control"
                            />
                            <div className="d-flex justify-content-center">
                                <button
                                    onClick={generateQR}
                                    type="button"
                                    className="btn btn-purple mt-3 w-100"
                                >
                                    <i className="fas fa-qrcode me-3" />
                                    Generate QR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">{qrImageMarkup}</div>
            </div>
        </div>
    );
};

export default GenerateQR;
