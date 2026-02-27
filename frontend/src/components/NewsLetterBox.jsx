import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subcribe now & get 20% off on products
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe now and enjoy 20% off on your first purchase! Be the first to
        know about exclusive deals, new arrivals, and special promotions
        delivered straight to your inbox.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex gap-3 mx-auto my-6 border"
      >
        <input
          className="w-full sm:flex-1 outline-none mt-3 pl-3 pb-3"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
