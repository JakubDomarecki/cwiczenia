
export const Photo = ({src, alt, handleModalPhotoOpen}) => {

    return (
         <div className="photo" onClick={handleModalPhotoOpen}>
             <img src={src}  alt={alt}/>
         </div>

    )
}