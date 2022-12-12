import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Form() {

    const [value, setValue] = useState(false);
    const [currentValue, setCurrentValue] = useState(null);
    const [error, setError] = useState(false);


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const select = (s) => {
        setValue(true);
        setCurrentValue(s);
    }



    const handleSubmit = async (e) => {

        if (!name || !age || !address || !contact || !email || !currentValue) {
            window.alert("Please fill all the fields");

        }
        setError(false);
        e.preventDefault();
        const date = new Date();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        try {
            const res = await axios.post("http://localhost:8000/api/add", {
                name, age, address, contact, email, batch: currentValue
            });
            res.data && window.alert(`You have successfully registered for ${currentValue} batch for ${months[date.getMonth()]} month`);
            console.log(name, age, address, contact, email, currentValue);
            console.log(res);

        } catch (error) {
            window.alert("You have already registered for this batch or Month and you can't register again. Although you can change your batch from month");
            console.log(error);
        }
    }



    return (
        <>
            <div className="container">
                <form action="" onSubmit={handleSubmit} >
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input type="text" className="form-control" onChange={e => { setName(e.target.value) }} placeholder="Enter your Full Name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                        <label>Only 18-65 Age group allowed</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Age</span>
                        <input min={18} max={65} type="Number" onChange={e => { setAge(e.target.value) }} className="form-control" placeholder="Enter your Age" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Address</span>
                        <input type="text" className="form-control" onChange={e => { setAddress(e.target.value) }} placeholder="Enter your Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Contact</span>
                        <input type="Number" className="form-control" onChange={e => { setContact(e.target.value) }} placeholder="Enter your Phone Num" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="email" className="form-control" onChange={e => { setEmail(e.target.value) }} placeholder="Enter your Email" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>



                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Select batch
                    </a>


                    <ul className="dropdown-menu">

                        <li><a className="dropdown-item" href="#" onClick={() => { select("6-7 AM") }} >6 - 7 AM</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => { select("7-8 AM") }} >7 - 8 AM</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => { select("8-9 AM") }} >8 - 9 AM</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => { select("5-6 PM") }} >5 - 6 PM</a></li>

                        {/* <li><a class="dropdown-item" href="#" onClick={setCurrentValue(0)}  >7 - 8AM</a></li>
                    <li><a class="dropdown-item" href="#" onClick={setCurrentValue(0)}  >8 - 9AM</a></li>
                    <li><a class="dropdown-item" href="#" onClick={setCurrentValue(0)}  >5 - 6PM</a></li> */}

                    </ul>


                    {value && <span className="input-group-text" id="second">{currentValue}</span>}





                    <div className="input-group mb-3" style={{ "float": "right" }}>
                        <span className="input-group-text">Rs</span>

                        <span className="input-group-text">500.00</span>
                    </div>

                    <button type="submit" className="btn btn-primary" >Submit</button>

                </form>
            </div>
        </>
    )
}

export default Form




