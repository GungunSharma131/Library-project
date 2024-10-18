import React from "react"
import image from "../assets/wh.png"
import image1 from "../assets/Phone.png"
import image2 from "../assets/location.png"
import { useCallback, useEffect, useState } from "react"
function Form(){
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [gender,setGender] =useState("");

    const [message,setMessage]=useState("");
    function handleEmail(event){
        let inputValue = event.target.value;
        setEmail(inputValue);

        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(inputValue)) {
      setMessage("Error! you have entered invalid email.");
    } else {
      setMessage("");
    }
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
        );
        setfirstName("");
        setlastName("");
        setEmail("");
        setContact("");
        setGender("");

        if(firstName == 0){
            alert("First name can't be emoty")
            return
        };
        if(lastName == 0){
            alert("Last name can't be emoty")
            return
        };
        if(email == 0){
            alert("Email can't be emoty")
            return
          };
          
          if(contact == 0){
            alert("Contact can't be emoty")
            return
          };
          if( gender == 0){
            alert("Gender can't be emoty")
            return
          };
    };
    const handleReset = () => {
        // Reset all state variables here
        setfirstName("");
        setlastName("");
        setEmail("");
        setContact("");
        setGender("");
    };
    return(
        <>
                
  <div className="form-section1">
  <h1 className="card-head">User Details</h1>
  <div className="form-section">
    <div className="form1">
        <div className="main-form">
        <marquee className="marq" bgcolor="#e3f2fd" 
                 direction="left" loop="">
       Books are like gardens: "A book is like a garden, carried in the pocket
      </marquee>
            <fieldset>
                <form action="#" method="get">
                    <label htmlFor="firstName">
                        First Name*
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstName}
                        onChange={(e) =>
                            setfirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required
                        />
                        <label htmlFor="lastname">Last Name*</label>
                        <input
                             type="text"
                             name="lastname"
                             id="lastname"
                             value={lastName}
                             onChange={(e) =>
                                 setlastName(e.target.value)
                             }
                             placeholder="Enter Last Name"
                             required
                             />
                             <label htmlFor="email">Enter Email*</label>
                             <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                    onChange={handleEmail}
                                    placeholder="Enter Email"
                                    required
                                    />
                                    <span style = {{ color: "red" }}>{message}</span>
                                    <label htmlFor="tel">Contact*</label>
                                    <input
                                      type="tel"
                                      name="contact"
                                      id="contact"
                                      value={contact}
                                      onChange={(e)=>
                                        setContact(e.target.value)
                                      }
                                      placeholder="Enter Mobile "
                                      required
                                      />
                                      <label htmlFor="gender">Gender*</label>
                                      <input
                                       type="radio"
                                       name="gender"
                                       value="male"
                                       id="male"
                                       checked={gender ==="male"}
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                        />
                                        Male
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            id="female"
                                            checked={gender === "female"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                          Female
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            id="other"
                                            checked={gender === "other"}
                                            onChange={(e) =>
                                                setGender(e.target.value)
                                            }
                                        />
                                        Other
                                        <button className="form-btn"
                                            type="reset"
                                            value="reset"
                                            onClick={() => handleReset()}
                                        >
                                            Reset
                                        </button>
                                        <button className="form-btn"
                                            type="submit"
                                            value="Submit"
                                            onClick={(e) => handleSubmit(e)}
                                        >
                                            Submit
                                        </button>

                </form>
            </fieldset>
        </div>


    
    </div>
    <div className="right">
    <div className="form2">
      <div className="form3">
        <p className="form-para">
          <b>Whatsapp</b>
        </p>
        <p className="form-para1">Lucknow:<br/>
        +91-9044001000
        </p>

        <p className="form-para1">Ghaziabad:<br/>
        +91-9936783798
        </p>
        <img src={image}/>
      </div>
      <div className="form4">
      <p className="form-para">
          <b>Phone</b>
        </p>
        <p className="form-para1">Lucknow:<br/>
        +91-9044001000
        </p>

        <p className="form-para1">Ghaziabad:<br/>
        +91-9936783798
        </p>
        <img src={image1}/>
    
      </div>
     
    </div>
    <div className="form5">
        <p className="formbox-3"><b>Address</b></p>
        <p className="formbox-4"><b>Lucknow Campus:</b> <span className="formbox-para">2nd Floor 25A Kapoorthala Arcade, Aliganj lucknow, 
            <br/>Uttar Pradesh 226024</span></p>
            <p className="formbox-4"><b>Ghaziabad Campus:</b> <span className="formbox-para">Plot No. 3, near Shopprix Mall, Sector 4, Vaishali, Ghaziabad, 
            <br/>Uttar Pradesh 201010</span></p>
            <img src={image2}/>
        

        
        </div>
   </div>
  </div>

    
  </div>
        
         </>

    )
}
export default Form 