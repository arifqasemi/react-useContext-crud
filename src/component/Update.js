import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../store/provider";

function Update(params) {
    const [userName,setName]= useState();
    const [userEmail,setEmail]= useState();
    const ctx = useContext(GlobalContext);
    const navigate = useNavigate();
    const {id} = useParams();
     
        const user = ctx.users.filter((u) => u.id == id);
        const {name,email}= user[0];
        useState(() => {
            setName(name);
            setEmail(email);
          }, [name, email]);


    const submitHandler = (e)=>{
        e.preventDefault();
     
        ctx.editUser({name:userName,email:userEmail,id});
        navigate('/');
    }
    return(
        <div className="container border mt-5">
         <form onSubmit={submitHandler}>
         <div className="form-group">
            <h4>Edit User</h4>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="tedt" className="form-control" onChange={e =>setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" value={userName}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" onChange={e =>setEmail(e.target.value)} id="exampleInputPassword1" placeholder="Email" value={userEmail}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default Update;