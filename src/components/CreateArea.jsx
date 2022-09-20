import React, {useState}  from "react";

function CreateArea(props) {
    
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInputText((prevValue) => {
            if (name === "title"){
                return {
                    title: value,
                    content: prevValue.content
                }
            } 
            else if (name === "content"){
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })
    };
    
    return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
      } }>
        <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={inputText.content} onChange={handleChange}/>
        <button onClick={() => {
            props.onAdd(inputText);
            setInputText({
                title: "",
                content: ""
            });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
