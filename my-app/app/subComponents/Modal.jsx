import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Image from "next/image";

const Modal = ({closeModal, selectedImage}) => {

    return(
        <div className="overlay bg-slate-800/50 w-screen h-screen fixed left-0 top-0 z-10 flex justify-center items-center">
            {/* <img src={} alt="bigger picture"/> */}
            <div className="flex justify-center bg-black/60 items-center w-[70%] h-[80%] rounded-lg relative">
            <button type="button" onClick={closeModal} className="absolute right-[20px] top-[20px]">
                <CloseIcon color="" fontSize="large" sx={{fill:"#fff"}} />
            </button>
            <Image src={selectedImage} width={400} height={400} alt="lighbox" className="rounded-[20px]"/>
            </div>
        </div>
    )
}

export default Modal