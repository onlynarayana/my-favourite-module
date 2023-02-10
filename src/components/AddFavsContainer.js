import React, { useEffect, useState } from "react";
import { Button, Input, InputArea } from "../utills";

const AddFavsContainer = () => {
  const [value, setValue] = useState("reactjs");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://api.npms.io/v2/search?q=reactjs")
      .then((response) => response.json())
      .then((data) => {
        setArr(data.results);
        console.log(data.results.map((n) => n.package.name));
      });
  }, []);

  return (
    <>
      <div className="w-80vw mt-16 px-24 h-auto flex flex-col items-start justify-start">
        <Input name="search" label="Search for NPM Packages" value={value} />
        <div>
          <p className="font-bold">Results</p>
          {
            <ul>
              {arr.map((n) => (
                <li>
                  <input type="radio" className="mr-2" />
                  {n.package.name}
                </li>
              ))}
            </ul>
          }
        </div>
        <div>
          <InputArea name="inputArea" label="Why is this your fav?" />
        </div>
      </div>
      <div className="w-90vw h-auto px-3 flex items-end justify-end">
        <Button name="Submit" />
      </div>
    </>
  );
};

export default AddFavsContainer;
