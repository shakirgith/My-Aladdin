// import React, { useState } from 'react';


// const Registration = () => {

//     const [userRegistration, setUserRegistration] = useState({

//             username: "",
//             email: "",
//             phone: "",
//             password: ""

//     });

//     const [records, setRecords] = useState([]);



//     const handleInput = (e) =>  {
//         const name = e.target.name;
//         const value = e.target.value;
//         console.log(name);

//         setUserRegistration ({ ...userRegistration, [name]: value });

        

//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         //     const value = e.target.value;
//         //  if this.value = e.target.value(0) {
//         //     alert("Title or Description cannot be blank");
//         // }
//         // else {
   
       

//         const RegistrationRecords = { ...userRegistration, id:new Date().getTime().toString()}
//         console.log(records);
//         setRecords ([ ...records, RegistrationRecords]);
//         console.log(records);

//         setUserRegistration({ username: "", email: "", phone: "", password: ""});

  

//     } 



//     return (
//         <>

//         <div className="col-12">

//                 <h4>Registration Form</h4>

//                 <form action="" autoComplete="off" onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                     <label class="form-label">Full Name</label>
//                     <input type="text" value={userRegistration.username} onChange={handleInput} className="form-control" name="username" id="username" required />
//                     </div>
           
//                     <div className="mb-3">
//                     <label class="form-label">Email</label>
//                     <input type="text" value={userRegistration.email} onChange={handleInput} className="form-control"  name="email" id="email" required />
//                     </div>

//                 <div className="mb-3">
//                     <label class="form-label">Phone</label>
//                     <input type="text" value={userRegistration.phone} onChange={handleInput} className="form-control" name="phone" id="phone" required />
//                 </div>
//                 <div className="mb-3">
//                     <label  className="form-label">Password</label>
//                     <input type="password" value={userRegistration.password} onChange={handleInput} className="form-control" name="password" id="password" required/>
//                 </div>
//                 <div className="text-center">
//                 <input type="submit" className="btn btn-success btn-primary" name="submit" value="Submit" />
//                 </div>
//                 </form>
//                 </div>
                



//                 <div className="col-12">
//                     <h6>Registration Record Data</h6>
//                     {
//                         records.map ((curElem) => {
//                             return (
//                                 <ul>
//                                 <li>{curElem.username}</li>
//                                 <li>{curElem.email}</li>
//                                 <li>{curElem.phone}</li>
//                                 <li>{curElem.password}</li>
//                                 </ul>
//                             )
//                         })
//                     }
             
                        

//                     </div>

//         </>
//     )
// }

// export default Registration
