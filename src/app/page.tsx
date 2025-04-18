"use client";

import { PhotoItem } from "@/components/base";
import { Modal } from "@/components/modal";
import { allPhotos } from "@/data/people";
import { useState } from "react";


const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState('');

  const handlePhotoClick = (id: number) => {
    const selectedPhoto = allPhotos.find(e => e.id === id);
    if (selectedPhoto) {
      setPhoto(selectedPhoto.img);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setPhoto('');
  }

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className="font-bold text-3xl m-5">Perfil Photos</h1>
        <div className=" container max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {allPhotos.map(e => (
            <PhotoItem
              key={e.id}
              photos={e}
              onClick={() => handlePhotoClick(e.id)}
            />
          ))}
        </div>
      </div>
      {showModal && 
       <Modal image={photo} closeModal={closeModal} />
       }
    </div>
  );
};

export default Page;
