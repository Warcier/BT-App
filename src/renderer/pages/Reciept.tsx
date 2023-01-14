import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { storage } from 'renderer/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const Receipts = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert('Image Uplaoded');
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        })
      })
    })
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>Upload your invoice/receipt:</h1>
        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />
        <button type="submit" onClick={uploadImage} className="btn">
          Upload
        </button>
      </div>
      <div className="flex items-center justify-center">
        {imageList.map((url) => {
          return (
            <img
              src={url}
              className="image"
              alt=""
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Receipts;
