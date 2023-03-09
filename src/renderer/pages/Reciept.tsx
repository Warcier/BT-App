import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { storage } from 'renderer/firebase';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash, faT } from '@fortawesome/free-solid-svg-icons';
import { bool, boolean } from 'joi';

function Receipts() {
  const [imageUpload, setImageUpload] = useState<FileList>();
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'images/'); // Referencing firebase storage path
  const inputRef = useRef(null); // Used for reset file input later

  // Used in image gallery part
  const [Model, setModel] = useState(false);
  const [tempImageSrc, setTempImageSrc] = useState('');

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
          .catch((e) => console.warn(e));
      })
      .catch((e) => console.warn(e));
  };

  const deleteImage = () => {
    const desertRef = ref(storage, tempImageSrc);

    deleteObject(desertRef).then(() => {
        console.log('Delete Sucessfully!');
        setModel(false);
        window.location.reload();
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  // This is used to load the image when user first time enter this page

  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        response.items.forEach((item) => {
          getDownloadURL(item)
            .then((url) => {
              // @ts-ignore
              setImageList((prev) => [...prev, url]);
            })
            .catch((e) => console.warn(e));
        });
      })
      .catch((e) => console.warn(e));
  }, []);


  // const refresh = () => {
  //   window.location.reload();
  // }

  const getImg = (imgSrc: string, index: number) => {
    setModel(true);
    setTempImageSrc(imgSrc);

    console.log([imgSrc, index]);
    // console.warn(tempImageSrc);
  };

  return (
    <div className="h-full">
      <div className="flex items-center justify-center">
        <input
          ref={inputRef}
          type="file"
          className="file-input file-input-bordered file-input-info w-full max-w-lg"
          onChange={(event) => {
            // @ts-ignore
            setImageUpload(event.target.files[0]);
          }}
        />
        <button
          type="submit"
          className="btn"
          onClick={() => {
            uploadImage();
            // Reset file input field and imageUpload value
            setImageUpload(null);
            inputRef.current.value = null;
          }}
        >
          Upload
        </button>
      </div>

      <div className={Model ? 'model open' : 'model'}>
        <img src={tempImageSrc} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteImage} />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {imageList.map((url, index) => {
          return (
            // Normal view
            <div className="pics" key={index} onClick={() => getImg(url, index)}>
              <img src={url} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center bottom-0">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Receipts;
