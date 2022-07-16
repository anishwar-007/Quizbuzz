import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Home.css";
import Categories from "../../Data/Categories";
import { useHistory } from "react-router";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({name,setName , fetchQuestions}) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();
  const handleSubmit = () =>{
    if(!category || !difficulty || !name) setError(true)
    else{
      setError(false);
      fetchQuestions(category,difficulty);
      history.push('/quiz');
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span className="home-head"> Set your QUIZ up!</span>  
          <div className="settings__select">
            { error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
        <TextField style={{marginBottom:25}} label="Enter your name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        
        <TextField style={{marginBottom:30}}  select label="Enter category" variant="outlined"  onChange={(e) => setCategory(e.target.value)} value={category}  >
        { 
          Categories.map((cat) =>{
            return(
         <MenuItem key={cat.category} value={cat.value}>
           {cat.category}
         </MenuItem>
          )
          })
        }
        </TextField>

        <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large"
           onClick={handleSubmit}
          >
            Let's do it!
          </Button>
         </div>
      </div>

      <img src="homeimg.jpg" alt="" className="main-img" />
    </div>
  );
};

export default Home;
