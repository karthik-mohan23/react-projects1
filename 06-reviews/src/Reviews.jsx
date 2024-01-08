import { useState } from "react";
import reviews from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const reviewsData = reviews[index];

  const checkIndex = (currentIndex) => {
    if (currentIndex > reviews.length - 1) {
      return 0;
    }
    if (currentIndex < 0) {
      return reviews.length - 1;
    }
    return currentIndex;
  };

  const nextReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return checkIndex(newIndex);
    });
  };
  const prevReview = () => {
    setIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex === index ? checkIndex(randomIndex + 1) : randomIndex);
  };

  //   const nextReview = () => {
  //     setIndex((prevIndex) => {
  //       const newIndex = prevIndex + 1;
  //       if (newIndex > reviews.length - 1) {
  //         return 0;
  //       }
  //       return newIndex;
  //     });
  //   };

  //   const prevReview = () => {
  //     setIndex((prevIndex) => {
  //       const newIndex = prevIndex - 1;
  //       if (newIndex < 0) {
  //         return reviews.length - 1;
  //       }
  //       return newIndex;
  //     });
  //   };

  return (
    <div className="flex flex-col gap-4 max-w-80 border border-black px-5 py-2 mx-auto">
      <img
        src={reviewsData.image}
        alt=""
        className="rounded-full w-80 h-56 object-cover"
      />
      <div className="flex flex-col gap-4 items-center">
        <h2 className="font-bold text-2xl capitalize">{reviewsData.name}</h2>
        <h3 className="text-xl capitalize">{reviewsData.job}</h3>
        <p>{reviewsData.text}</p>
      </div>
      <div className="flex justify-between gap-4">
        <button
          onClick={prevReview}
          className="border border-gray-600 px-2 py-1 hover:bg-blue-500 rounded-lg">
          Previous
        </button>
        <button
          onClick={randomReview}
          className="border border-gray-600 px-2 py-1 hover:bg-blue-500 rounded-lg">
          Random
        </button>
        <button
          onClick={nextReview}
          className="border border-gray-600 px-2 py-1 hover:bg-blue-500 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};
export default Reviews;
