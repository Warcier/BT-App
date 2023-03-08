import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { storage } from 'renderer/firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


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

  // const refresh = () => {
  //   window.location.reload();
  // }


  const getImg = (imgSrc: string) => {
    setModel(true);
    setTempImageSrc(imgSrc);

    console.log(imgSrc);
    console.warn(tempImageSrc);
  }


  return (
    <div className="bg-white">
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

      <div className={ Model ? "model open" : "model"}>
        <img src={tempImageSrc} />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="gallery">
        {imageList.map((url, index) => {
          return (
            //<img src="image.jpg" alt="Image" onClick={showImageModal} />
            //{
            //  showModal && (
            //    <div className="modal">
            //      <img src="image.jpg" alt="Image" />
            //    </div>
            //  )
            //}
            //
            <div className="pics" key={index} onClick={() => getImg(url) }>
              <img src={url} style={{width: '100%'}} />
            </div>
          );
          })
        }
      </div>

      <div className="flex items-center justify-center">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>

    </div>
  );
}

export default Receipts;
