import { CiStar } from "react-icons/ci";
import { useState } from "react";

const StartRating = ({ noOfStarts }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="flex gap-5 justify-center items-center mt-20">
      {[...Array(noOfStarts)].map((_, index) => (
        <CiStar
          key={index + 1}
          className={
            index + 1 <= (rating || hover)
              ? "bg-yellow-400 cursor-pointer"
              : "bg-white cursor-pointer"
          }
          onClick={() => handleOnClick(index + 1)}
          onMouseEnter={() => handleMouseMove(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
          size={60}
        />
      ))}
    </div>
  );
};

export default StartRating;
