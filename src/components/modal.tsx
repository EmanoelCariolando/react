type Props = {
    image: string;
    closeModal: () => void;
}



export const Modal = ({image, closeModal}:Props) => {
    return (
        <>
          <div className="fixed top-0 left-0 flex justify-center items-center w-screen h-screen bg-black " >
            <img src={image}/><img className="w-max h-max" />
          </div>
         <div className="fixed top-5 right-5 w-10 h-10 cursor-pointer text-white text-4xl" onClick={closeModal}>X</div>
        </>
    )
}