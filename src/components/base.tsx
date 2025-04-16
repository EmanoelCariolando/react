
import { Photo } from "../types/typeg"

 type Props = {
    photos: Photo;
    onClick: () => void;
 }

export const PhotoItem = ({photos, onClick}: Props) => {
 return (
    <div className=" m-1 cursor-pointer hover:scale-105 transition-transform duration-300 hover:opacity-80%" onClick={onClick}>
     <img src={photos.img} className="w-35 h-35" />
    </div>
 )
}