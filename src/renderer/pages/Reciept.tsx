import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { storage } from 'renderer/firebase';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject, getMetadata, FullMetadata } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faTrash, faT, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { bool, boolean } from 'joi';
import ImageUpload from '../components/ImageUpload';

function Receipts() {
  const [imageUpload, setImageUpload] = useState<FileList>();
  const [imageList, setImageList] = useState([]);
  const [metaData, setMetaData] = useState<FullMetadata>([]);

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
          getMetadata(item)
            .then((value) => {
              setMetaData((prev) => [...prev, value]);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((e) => console.warn(e));

    // Getting Meta Data of File
    //getMetadata(item)
    //  .then((value) => {
    //    setMetaData(value);
    //  })
    //  .catch((error) => {
    //    console.log(error);
    //  })
    console.log();
    console.log(metaData);
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
    <div className="h-full p-3">

      <div className={Model ? 'model open' : 'model'}>
        <img src={tempImageSrc} />
        {/*<a href={tempImageSrc + "?force=true"}>*/}
        {/*  <FontAwesomeIcon icon={faFileArrowDown} />*/}
        {/*</a>*/}
        <FontAwesomeIcon icon={faTrash} onClick={deleteImage} />
        <FontAwesomeIcon icon={faXmark} onClick={() => setModel(false)} />
      </div>

      <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {imageList.map((url, index) => {
          return (
            // Full-bleed carousel from DaisyUI
            <div className="carousel-item">
              <img src={url} className="rounded-box w-600 h-400 hover:opacity-70" key={index} onClick={() => getImg(url, index)} />
            </div>


            // Carousel with next/prev buttons from DaisyUI
            //<div id={"slide" + index} className="carousel-item relative w-full">
            //  <img src={url} className="gallery" key={index} onClick={() => getImg(url, index)}/>
            //  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            //    <a href={"#slide" + (index-1)} className="btn btn-circle">❮</a>
            //    <a href={"#slide" + (index+1)} className="btn btn-circle">❯</a>
            //  </div>
            //</div>

            // Normal view
            //<div className="pics" key={index} onClick={() => getImg(url, index)}>
            //  <img src={url}/>
            //</div>
          );
        })}
      </div>

      {/*<div className="btn-group flex items-center justify-center">*/}
      {/*  <button className="btn">«</button>*/}
      {/*  <button className="btn">Page 1</button>*/}
      {/*  <button className="btn">»</button>*/}
      {/*</div>*/}
      <div className="pt-2">
        <ImageUpload />
      </div>

      {/*<div className="flex items-center justify-center bottom-0 pt-2">*/}
      {/*  <Link to="/" className="btn">*/}
      {/*    Home*/}
      {/*  </Link>*/}
      {/*</div>*/}
    </div>
  );
}

export default Receipts;
