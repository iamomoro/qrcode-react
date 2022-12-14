import QRCode from 'qrcode';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [qrcode, setQrcode] = useState('');

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: '#000000ff',
          light: '#ffffff',
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        setQrcode(url);
      }
    );
  };

  return (
    <>
      <div className="app">
      <h3>React JS</h3>
        <h1>QR Code Generator</h1>
        <input
          type="text"
          placeholder=" e.g. https://github.com/"
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
        {qrcode && (
          <>
            <img src={qrcode} />
            <a href={qrcode} download="qrcode.png">
              Download
            </a>
          </>
        )}
      </div>
      <div className="footer">React JS QR Code Generator</div>
      <div className="footer">Made with ❤️ by Elvis Omoro</div>
    </>
  );
}

export default App;
