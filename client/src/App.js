// import logo from './logo.svg';
import { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');



  const fileInputRef = useRef();
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  console.log(file)

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);

        try {
          const response = await uploadFile(data);
          setResult(response.path);
        } catch (error) {
          setError('An error occurred while uploading the file. Please try again.');
        }
      }
    };
    getImage();
  }, [file])
  return (
    <div className="container">
      <img src={logo} alt='banner' />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the title link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>

        <input type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} >{result}</a>
      </div>
    </div>
  );
}

export default App;
