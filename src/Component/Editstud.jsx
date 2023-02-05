import React from 'react'
import Student from './Student'
import DataContext from './Datacontext'
import { useContext,useState,useEffect } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const Editstud = () => {
    const context = useContext(DataContext);
    const data = useLocation('');
    const navigate = useNavigate();

    const [formData, setDetails] = useState({
        Name: "",
        Age: "",
        Course: "",
        Batch: ""
    });

    useEffect(() => {
        if(data.formData !== null) {
            setDetails({
                name: data.formData.details.Name,
                age: data.formData.details.Age,
                course: data.formData.details.Course,
                batch: data.formData.details.Batch
            })
        }
    }, [data])

    // let studentsDetails = [];
    const changeHandler = (e) => {
        setDetails({...formData,[e.target.name]: e.target.value});
    }

    const submitInfo = () => {
        if(data.formData === null) {
            context.dispatchUserEvent('ADD_USER', { newUser: formData });
            navigate('/students');
        } else {
            const newState = context.entries.map((obj, index) => {
                if (index === data.formData.id) {
                    let myObj = {...obj};
                    myObj['name'] = formData.Name;
                    myObj['age'] = formData.Age;
                    myObj['course'] = formData.Course;
                    myObj['batch'] = formData.Batch;
                    return myObj;
                }
                return obj;
            });
            context.dispatchUserEvent('EDIT_USER', { newUser: newState });
            navigate('/students');
        }
    }
  return (
    <div>
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
          <button className='add-btn' onClick={submitInfo}>Update</button>
          {/*HTML Button is of type SUBMIT*/}
        </form>  
    </div>

  )
}

export default Editstud