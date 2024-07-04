import { useEffect } from "react"
import { useState } from "react"
import { Photo } from "./Photo.jsx";
import './main.scss'
import { Modal } from "./Modal.jsx";

const API_BASE_URL = 'https://api.pexels.com/v1/';
const YOUR_API_KEY = import.meta.env.VITE_API_KEY;


export const Gallery = ({ query }) => {

    const [photos, setPhotos] = useState(null)
    const [modal, setModal] = useState(null)


    useEffect(() => {
      fetch(`${API_BASE_URL}/search?${new URLSearchParams({
        query,
        per_page: 9,
      })}`, {
        headers: {
            Authorization: YOUR_API_KEY,
        }
      })
      .then(resp => resp.json())
      .then(data => setPhotos(data.photos))
      .catch(err => console.log(err))
    }, [])

    const handleModalPhotoOpen = (id) => {
      const photo = photos.find((photoApi) => (photoApi.id === id))

      setModal({
        src: photo.src.original,
        author: photo.photographer,
        alt: photo.alt,
        handleCloseModal: function () {
          setModal(null)
        }
      })
    }

  

    
    if (!photos) {
        return <p>loading...</p>
    }

    return(
        <div className="Gallery_container">

            {modal && <Modal {...modal}/>}

           {photos.map(photo => (
            <Photo key={photo.id} src={photo.src.medium} alt={photo.alt} handleModalPhotoOpen={() => handleModalPhotoOpen(photo.id)}/>
           ))}
        </div>
    )
}