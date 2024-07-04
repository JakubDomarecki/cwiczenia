
export const Modal = ({src, alt, author, handleCloseModal}) => {

    return(
        <div className="modal-photo">
            <div className="modal-photo-content">
                <img src={src}  alt={alt} />
                <p>{author}</p>
                <button onClick={handleCloseModal}>Close modal</button>
            </div>
         </div>
    )
}