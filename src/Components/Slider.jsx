import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight} from "lucide-react"

export default function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(0);

    const handleNext = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

  const handlePrev = () => {
    setImageIndex((prevIndex) =>
        (prevIndex - 1 + images.length) % images.length);
    };

  return (
    <>
      <div className="md:flex md:gap-4">
        <button onClick={handlePrev} className="py-2 px-4 hidden md:block"><ArrowBigLeft/></button>

        <img src={images[imageIndex]} alt={`Image ${imageIndex}`} className="rounded-xl shadow-2xl w-[20rem] md:w-96"/>
        
        <button onClick={handleNext} className="py-2 px-4 hidden md:block"><ArrowBigRight/></button>

        <div className="flex md:hidden justify-center gap-10 mt-4">
            <button onClick={handlePrev} className="py-2 px-4"><ArrowBigLeft/></button>
            <button onClick={handleNext} className="py-2 px-4"><ArrowBigRight/></button>
        </div>
      </div>
    </>
  );
}
