import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { storage } from 'renderer/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function Receipts() {
  //
  const [imageUpload, setImageUpload] = useState<FileList>(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'images/');

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    // @ts-ignore
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            // @ts-ignore
            setImageList((prev) => [...prev, url]);
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) => {
              // @ts-ignore
              setImageList((prev) => [...prev, url]);
            })
            .catch((e) => console.log(e));
        });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>Upload your invoice/receipt:</h1>
        <input
          type="file"
          onChange={(event) => {
            // @ts-ignore
            setImageUpload(event.target.files[0]);
          }}
        />
        <button type="submit" onClick={uploadImage} className="btn">
          Upload
        </button>
      </div>
      {imageList.map((url) => {
        return (
          <div className="flex items-center justify-center">
            <img src={url} className="image" alt="" />
          </div>
        );
      })}
      <div className="flex items-center justify-center">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Receipts;
