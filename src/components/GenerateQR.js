import QRCode from 'qrcode';
import React, { useState } from 'react';

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
        <div className="card mt-5 shadow text-center">
            <div className="card-body">
                {imgUrl ? <img src={imgUrl} alt="..." /> : null}
                <div className="">
                    <a href={imgUrl} download className="btn btn-primary">
                        Download QR
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <div className="card shadow mt-5">
                <div className="card-header">Generate QR code</div>
                <div className="card-body">
                    <input
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Enter text"
                        className="form-control"
                    />
                    <div className="d-flex justify-content-center">
                        <button onClick={generateQR} type="button" className="btn btn-primary mt-3">
                            Generate
                        </button>
                    </div>
                </div>
            </div>

            {imgUrl && qrImageMarkup}
        </div>
    );
};

export default GenerateQR;
