import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import PictureList from "./PictureURL"

function DragDrop() {
  const [box1, setBox1] = useState([]);
  const [box2, setBox2] = useState([]);

  const [{ isOver: isOver1 }, drop1] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBox(item.id, setBox1),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOver2 }, drop2] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBox2(item.id, setBox2),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBox = (id, setBox) => {
    // Find the picture from PictureList with the provided id
    const picture = PictureList.find((picture) => picture.id === id);

    // If picture is found, add it to the appropriate box
    if (picture) {
      setBox((prevBox) => [...prevBox, picture]);
    }
  };

  const addImageToBox2 = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBox2([pictureList[0]]);
    console.log(id);
  };
  const removeImageFromBox = (id, setBox) => {
    setBox((prevBox) => prevBox.filter((picture) => picture.id !== id));
  };



  return (
    <> 
    
      <div className="Pictures">
        {PictureList.map((picture) => (
          <Picture key={picture.id} url={picture.url} id={picture.id} />
        ))}
      </div>
      <div className="mainBox">
        <div ref={drop1} className="Box">
          {box1.map((picture) => (
            <div key={picture.id} className="PictureContainer">
              <Picture url={picture.url} id={picture.id} />
              <button
                className="RemoveButton"
                onClick={() => removeImageFromBox(picture.id, setBox1)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div ref={drop2} className="Box">
          {box2.map((picture) => (
            <div key={picture.id} className="PictureContainer">
              <Picture url={picture.url} id={picture.id} />
              <button
                className="RemoveButton"
                onClick={() => removeImageFromBox(picture.id, setBox2)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
   
    </>
  );
}

export default DragDrop;
