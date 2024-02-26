import React from 'react';
import '../App.css';
import { useDrag } from 'react-dnd';

function Picture({ id, url }) {
  
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),  //to keep track of information isDragging return true or false 
        }),
    }))
    return (
  
            <div className="picture-container">
                <div className="picture">
                    <img ref={drag} src={url} alt={`Picture ${id}`} style={{ border: isDragging ? "5px solid pink" : "0px" }} />
                </div>

            </div>
       
    );
}

export default Picture;
