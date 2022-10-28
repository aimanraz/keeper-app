import React, {useState}  from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
    const [isToggle, setIsToggle] = useState(false);
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;

        setInputText((prevValue) => {
                return {
                    ...prevValue,
                    [name]: value
                }
            })
    };
    
    return (
    <div>
      <form className="create-note " onSubmit={(e) => {
        e.preventDefault()
      } }>
        {isToggle ? <input name="title" placeholder="Title" value={inputText.title} onChange={handleChange}/> : ''}
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows={isToggle ? 3 : 1}
            value={inputText.content} 
            onChange={handleChange}
            onClick={() => setIsToggle(true)}
        />{isToggle ?

        <Zoom in={setIsToggle}>
          <Fab onClick={() => {
            props.onAdd(inputText);
            setInputText({
                title: "",
                content: ""
            });
        }}>
            <AddIcon/>
          </Fab>
        </Zoom> : ''}
      </form>
    </div>
  );
}

export default CreateArea;
