import React, { useState } from 'react'
import './App.css';
import { QRCodeCanvas } from "qrcode.react";


function App() {


  const [url, setUrl] = useState('');

  const downloadQRCode = () => {
    // e.preventDefault();
    const canvas = document.getElementById('qrCode');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${url}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setUrl('');
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };


  return (
    <div className="qrcode__container">

      <div className="input__group">
        <div onSubmit={downloadQRCode}>
          <label>Enter URL</label>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="https://example.com"
          />
          <div>
            {url && <QRCodeCanvas id="qrCode" value={url} size={300} level={'H'} />}
          </div>
          <button disabled={!url} onClick={downloadQRCode}>
            Download QR code
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;


// import React, { useState } from 'react'
// import ReactDOM from 'react-dom';
// import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

// export const App = () => {
//   const [url, setUrl] = useState("");
//   const downloadQRCode = (e) => { e.preventDefault(); setUrl(""); };
//   const qrCodeEncoder = (e) => {
//     setUrl(e.target.value)
//     const qrcode = (
//       <QRCodeCanvas
//         id="qrCode"
//         value={url}
//         size={300}
//         bgColor={"# 00ff00 "} level={" H "} />
//     );
//   }

//   return (
//     <div className="qrcode__container">
//       <div > {qrcode} </ div >
//       <div className="input__group">
//         <form onSubmit={downloadQRCode}>
//           <label> Enter URL </label>
//           <input
//             type="text"
//             value={url}
//             onChange={qrCodeEncoder}
//             placeholder="https://hackernoon.com"
//           />
//           <button type="submit" disabled={!url}>Download QR code</button>
//         </form>
//       </div>
//     </div>
//   )
// };

