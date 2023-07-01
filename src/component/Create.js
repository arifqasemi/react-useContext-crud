import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../store/provider";
function Create(params) {
    const [email,setEmail]= useState();
    const [name,setname]= useState();
    const ctx = useContext(GlobalContext);
    const navigate = useNavigate();
    //     console.log(users.length);

    const submitHandler = (e)=>{
        e.preventDefault();
        const userNewId = ctx.users.length > 0  ? ctx.users.length + 1 : 1;
        console.log(userNewId);
    //     dispatchdata(insertAction.addUser({id:userNewId, name,email}));
        ctx.addUser({name:name,email:email,id:userNewId});
        navigate('/');
    }
    return(
        <div className="container border mt-5">
         <form onSubmit={submitHandler}>
         <div className="form-group">
            <h4>Add User</h4>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="tedt" className="form-control" onChange={e =>setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" onChange={e =>setEmail(e.target.value)} id="exampleInputPassword1" placeholder="Email"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
    
}

export default Create;