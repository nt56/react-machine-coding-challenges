import { useEffect, useState } from "react";
import { images } from "./constants";

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNext = () => {
    activeImageIndex === images.length - 1
      ? setActiveImageIndex(0)
      : setActiveImageIndex(activeImageIndex + 1);
  };

  const handlePrevious = () => {
    activeImageIndex === 0
      ? setActiveImageIndex(images.length - 1)
      : setActiveImageIndex(activeImageIndex - 1);
  };

  //every 5 second image should change
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImageIndex]);

  return (
    <div className="App flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl font-extrabold py-5">Image Carousel</h1>

      <div className="flex gap-5 items-center justify-center">
        <button
          className="bg-black text-white rounded-xl p-2 h-fit"
          onClick={handlePrevious}
        >
          Previous
        </button>

        {images.map((imgURL, i) => (
          <img
            key={i}
            src={imgURL}
            alt="img"
            className={
              "w-[700px] h-[500px] rounded-xl " +
              (activeImageIndex === i ? "block" : "hidden")
            }
          />
        ))}

        <button
          className="bg-black text-white rounded-xl p-2 h-fit"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      <div className="flex gap-5">
        {images.map((_, i) => (
          <button
            key={i}
            className={
              activeImageIndex === i
                ? "bg-gray-300 w-[15px] h-[15px] cursor-pointer"
                : "bg-black w-[15px] h-[15px] cursor-pointer"
            }
            onClick={() => setActiveImageIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
