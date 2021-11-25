import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import axios from "axios";

const Registration = () => {

    const [tabIndex, setTabIndex] = useState(1);



    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("")

    function saveUser() {
      console.warn({username,email,phone,password});
      let data={username,email,phone,password}
      fetch("/t/wk1ok-1637822969/post",
      {
        method: 'POST',
        headers:{ 
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
              },

        body:JSON.stringify(data) 
        }).then((result)=>{
          //testing url https://ptsv2.com/t/wk1ok-1637822969
          //console.warn("result", result);
          result.json().then((resp)=>
          {
          console.warn("resp",resp)
          })
        })


}

   
    return (
        <>      
 <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
    <div className="modal fade register" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                
             
                <TabList>
                    
                    <Tab value={1} label="signup">Register</Tab>
                    <Tab value={0} label="login">Login</Tab>
                </TabList>



                {/* <h5 class="modal-title" id="exampleModalLabel">Register</h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <TabPanel>
                  <div id="Signup">

                       <div className="col-12">
                            <h4>Registration Form</h4>

                            <form autoComplete="off">
                                <div className="mb-4">  
                                {/* <label class="form-label">Full Name</label> */}
                                <input type="text" value={username}
							onChange={(e)=>{setUsername(e.target.value)}} className="form-control" name="username" id="username" placeholder="Enter full name" required />
                                </div>

                                <div className="mb-4">
                                {/* <label class="form-label">Email</label> */}
                                <input type="text" value={email}
							onChange={(e)=>{setEmail(e.target.value)}} className="form-control"  name="email" id="email" placeholder="Enter email" required />
                                </div>

                            <div className="mb-4">
                                {/* <label class="form-label">Phone</label> */}
                                <input type="text" value={phone}
							onChange={(e)=>{setPhone(e.target.value)}} className="form-control" name="phone" id="phone" placeholder="Enter phone no." required />
                            </div>
                            <div className="mb-4">
                                {/* <label  className="form-label">Password</label> */}
                                <input type="password" value={password}
							onChange={(e)=>{setPassword(e.target.value)}} className="form-control" name="password" id="password" placeholder="Create password" required/>
                            </div>
                            <div className="text-center">
                            <button type="button" className="btn btn-primary" onClick={saveUser}>Submit</button>
                            </div>
                            </form>
                            </div>

                            {/* <div className="col-12">
                                <h6>Registration Record Data</h6>
                                {
                                    records.map ((curElem) => {
                                        return (
                                            <ul>
                                            <li>{curElem.username}</li>
                                            <li>{curElem.email}</li>
                                            <li>{curElem.phone}</li>
                                            <li>{curElem.password}</li>
                                            </ul>
                                        )
                                    })
                                }

                                </div>  */}

                               

                  </div>{/* End Signup */}
                      <div class="not-resistered">
                      Already Registered?  <a href="#">Login</a>
                     </div>
                  </TabPanel>
                  <TabPanel>

                    <div id="Login">
                          <div className="col-12">
                          <h4>Login Form</h4>
                              
                         Coming Soon

                          </div>

                    </div>{/* End Login */}

                    <div class="not-resistered">
                          Not Registered? <a href="#">Sign Up</a>
                     </div>
                    </TabPanel>

                {/* <Registration /> */}
              </div>
              {/* <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div> */}
            </div>
          </div>
        </div>


                
        </Tabs>
        </>
    )
}

export default Registration





// import React, { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// const Registration = () => {

//     const [tabIndex, setTabIndex] = useState(1);

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
//  <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
//     <div className="modal fade register" id="register" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
                
             
//                 <TabList>
                    
//                     <Tab value={1} label="signup">Register</Tab>
//                     <Tab value={0} label="login">Login</Tab>
//                 </TabList>



//                 {/* <h5 class="modal-title" id="exampleModalLabel">Register</h5> */}
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//               </div>
//               <div className="modal-body">
//               <TabPanel>
//                   <div id="Signup">

//                        <div className="col-12">
//                             <h4>Registration Form</h4>

//                             <form action="" autoComplete="off" onSubmit={handleSubmit}>
//                                 <div className="mb-4">
//                                 {/* <label class="form-label">Full Name</label> */}
//                                 <input type="text" value={userRegistration.username} onChange={handleInput} className="form-control" name="username" id="username" placeholder="Enter full name" required />
//                                 </div>

//                                 <div className="mb-4">
//                                 {/* <label class="form-label">Email</label> */}
//                                 <input type="text" value={userRegistration.email} onChange={handleInput} className="form-control"  name="email" id="email" placeholder="Enter email" required />
//                                 </div>

//                             <div className="mb-4">
//                                 {/* <label class="form-label">Phone</label> */}
//                                 <input type="text" value={userRegistration.phone} onChange={handleInput} className="form-control" name="phone" id="phone" placeholder="Enter phone no." required />
//                             </div>
//                             <div className="mb-4">
//                                 {/* <label  className="form-label">Password</label> */}
//                                 <input type="password" value={userRegistration.password} onChange={handleInput} className="form-control" name="password" id="password" placeholder="Create password" required/>
//                             </div>
//                             <div className="text-center">
//                             <input type="submit" className="btn btn-primary" name="submit" value="Submit" />
//                             </div>
//                             </form>
//                             </div>
// {/* 
//                             <div className="col-12">
//                                 <h6>Registration Record Data</h6>
//                                 {
//                                     records.map ((curElem) => {
//                                         return (
//                                             <ul>
//                                             <li>{curElem.username}</li>
//                                             <li>{curElem.email}</li>
//                                             <li>{curElem.phone}</li>
//                                             <li>{curElem.password}</li>
//                                             </ul>
//                                         )
//                                     })
//                                 }

//                                 </div> */}

                               

//                   </div>{/* End Signup */}
//                       <div class="not-resistered">
//                       Already Registered?  <a href="#">Login</a>
//                      </div>
//                   </TabPanel>
//                   <TabPanel>

//                     <div id="Login">
//                           <div className="col-12">
//                           <h4>Login Form</h4>
                              
//                          Coming Soon

//                           </div>

//                     </div>{/* End Login */}

//                     <div class="not-resistered">
//                           Not Registered? <a href="#">Sign Up</a>
//                      </div>
//                     </TabPanel>

//                 {/* <Registration /> */}
//               </div>
//               {/* <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                 <button type="button" className="btn btn-primary">Save changes</button>
//               </div> */}
//             </div>
//           </div>
//         </div>


                
//         </Tabs>
//         </>
//     )
// }

// export default Registration




