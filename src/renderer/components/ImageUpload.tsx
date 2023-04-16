import { useState, useEffect, useRef } from 'react';
import { storage } from 'renderer/firebase';
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

function ImageUpload() {
  const [imageUpload, setImageUpload] = useState<FileList>();
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, 'photo/'); // Referencing firebase storage path
  const inputRef = useRef(null); // Used for reset file input later

  // Used in image gallery part
  const [Model, setModel] = useState(false);
  const [tempImageSrc, setTempImageSrc] = useState('');

  const uploadImage = () => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `photo/${imageUpload.name + uuidv4()}`);
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

  return (
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
  );
}

export default ImageUpload;
