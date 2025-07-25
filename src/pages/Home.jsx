import React, {useState} from 'react';
import "../index.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);

  const handleVideoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoURL(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!videoFile) {
      alert('Please select a video file to upload.');
      return;
    }

    // You can handle the upload logic here
    console.log('Uploading:', videoFile);
    navigate('/result')
  };
  return (
    <div className="h-screen bg-gray-200 w-screen">
      <div className="p-8 rounded-lg w-full max-w-md flex flex-row gap-4 float-right">
        <button className="text-white py-3 px-5 rounded font-bold">Input</button>
        <button
          onClick={() => navigate('/history')}
          className="text-white py-3 px-5 rounded font-bold"
        >
          History
        </button>
        <button
          onClick={() => navigate('/login')}
          className="text-white py-2 px-4rounded font-bold border-1"
        >
          Logout
        </button>
      </div>
      <div>
      <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
     
        <label
            htmlFor="videoUpload"
            className="w-full mb-4 h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <p className="text-gray-600 text-sm mb-2">Click to upload a video</p>
            {videoFile && (
              <p className="text-blue-600 text-sm font-medium">{videoFile.name}</p>
            )}
            <input
              id="videoUpload"
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="hidden"
            />
          </label>

        {videoURL && (
          <div className="mb-4">
            <video
              src={videoURL}
              controls
              className="w-full rounded shadow-sm"
              style={{ maxHeight: '200px' }}
            />
          </div>
        )}


        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </div>
    </div>
        
      </div>
    </div>
  );
};

export default Home;
