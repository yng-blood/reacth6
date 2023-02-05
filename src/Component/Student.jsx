import React from 'react'
import { Link } from 'react-router-dom'
import Blank from './Blank'
import { click } from '@testing-library/user-event/dist/click'
import { useState,useContext } from 'react'
import createContext from 'react-router-dom'

const Student = () => {
  const DataContext = React.createContext("");
  const context = useContext(DataContext);
  const [Toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Cource: "",
    Batch:"",
    TData: [],
  });
  const changeHandler = (eve) => {
    
    setFormData({ ...formData, [eve.target.name]: [eve.target.value] });
  };

  const submitHandler = (eve) => {
    eve.preventDefault();
    // console.log("submitHandler called");
    // console.log(formData);

    const arr = {
      Name: formData.Name,
      Age: formData.Age,
      Cource: formData.Cource,
      Batch:formData.Batch
    };

    let temp = formData.TData;
    temp.push(arr);
    setFormData({ ...formData, TData: temp });
    console.log(formData.TData);
    setToggle(true);
  };

  const displayHandler = () => {
    setToggle(false);
  };

  return (
    <div className="App">
      <h1 className="title">Student DATA</h1>
      {Toggle ? (   
<div>
  <div className="mainbox container">
      <table className="container box1"  >
      <tr > <th>Name </th>
           <th>Age</th>
          <th>Cource</th>
          <th>Batch</th>
          <th>edit</th>
      </tr>
      
  {formData.TData.map((value, index) => {
    return (
      <tr key={index}>
         <td>Name : {value.Name} </td>
           <td>Age : {value.Age}</td>
          <td>Cource: {value.Cource}</td>
          <td>Batch Name : {value.Batch}</td>
          <td><Link to='./Editstud.jsx'>edit</Link> </td>
      </tr>
       

    );
  })} </table>
</div>
<br />
<button className="btn btn-warning btn2" onClick={displayHandler}> add Student</button>
</div>
      ) : (
        <form>
          <label className="name">Name : </label>
          <input type="text" name="Name" value={formData.Name} onChange={changeHandler}></input>
          <br />
          <label className="name">Age : </label>
          <input type="text" name="Age" value={formData.Age} onChange={changeHandler}></input>
          <br />
          <label className="name">Cource : </label>
          <input type="text" name="Cource" value={formData.Cource} onChange={changeHandler}></input>
          <br />
          <label className="name">Batch : </label>
          <input type="text" name="Batch" value={formData.Batch} onChange={changeHandler}></input>
          <br />
          <br />
          <button className="btn btn-warning btn1" onClick={submitHandler}>
            Submit
          </button>
          {/*HTML Button is of type SUBMIT*/}
        </form>
      )}
    </div>
  );
}

export default Student
