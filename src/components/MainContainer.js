import React from "react";
import { Button } from "../utills";
import ListContainer from "./ListContainer";

const MainContainer = () => {
  return (
    <div className="w-screen h-auto mx-5 flex flex-col items-start justify-start">
      {/* <div className="w-screen h-20vh px-5 mt-10 mx-10 flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold flex items-start justify-start tracking-wide">
          Welcome to Favorite NPM Packages
        </h1>
      </div>
      <div className="h-40vh w-90vw flex flex-col items-center justify-center border-2 border-solid border-gray-400 rounded-none px-10 p-10 mx-10">
        <div>
          <p>You don't have any favs yet. Please add</p>
        </div>
        <Button name="Add Fav" />
      </div> */}

      {/* <div className="w-screen h-20vh px-5 mt-10 mx-10 flex flex-col items-start justify-start">
        <h1 className="text-3xl font-semibold flex items-start justify-start tracking-wide">
          Welcome to Favorite NPM Packages
        </h1>
      </div>
      <div className="h-40vh w-90vw flex flex-col items-center justify-center border-2 border-solid border-gray-400 rounded-none px-10 p-10 mx-10">
        <div>
          <p>You don't have any favs yet. Please add</p>
        </div>
        <button class="bg-blue-600 hover:bg-blue-800 text-white font-bold m-5 py-2 px-4 rounded">
          Add Fav
        </button>
      </div> */}
      <ListContainer />
    </div>
  );
};

export default MainContainer;
