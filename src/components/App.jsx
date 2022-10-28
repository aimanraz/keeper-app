import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

    const [listItem, setList] = useState([]);
    // this will add more item to the previous list
    function addItem(inputText){ 
        setList((prevValue) => {
            return [
                ...prevValue, inputText
            ]
        });
        
    };

    function deleteItem (id){
        setList((prevValue) => {
            return prevValue.filter((item, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            < Header />
            <CreateArea onAdd={addItem}/>
            {listItem.map((todoItem, index) => {
                return (
                    < Note
                    id={index} 
                    key={index}
                    title={todoItem.title}
                    content={todoItem.content}
                    onDelete={deleteItem}
                />
                )
            })}
            < Footer />
        </div>

    )
}

export default App;