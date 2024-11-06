import React, {useState} from "react";
function HogForm({onAddHog}) {

    const [name,setName] = useState("");
    const [specialty,setSpecialty] = useState("");
    const [weight,setWeight] = useState("");
    const [greased,setGreased] = useState(false);
    const [medal,setMedal] =useState("");
    const [message ,setMessage] = useState("");

    const handleSubmit = (event) => {
    event.preventDefault();

    const parsedWeight = parseFloat(weight);
    if(isNaN(parsedWeight)){
        alert("please enter a valid weigth.");
        return
    }
        const newHog = {
        name,
        specialty,
        weight:parseFloat(weight),
        greased,
        medal,
        };
    console.log(newHog);
    
        onAddHog(newHog);

        setName("");
        setSpecialty("");
        setWeight("");
        setGreased(false);
        setMessage("details have been captured");
        setMedal("");
    };
    return (
        <div>
        <form onSubmit={handleSubmit} className="hog-form" style={{display:"flex", margin:"5px"}}>
            <label>
                name:
                <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/>

            </label>

            <label>
                Specialty:
                <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
            </label>

            <label>
                Weigth:
                <input type="text" value={weight}  onChange={(e) => setWeight(e.target.value)} />
            </label>

            <label>
               greased:
               <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.value)} /> 
            </label>

            <label>
                Highest Medal:
                <input type="text" value={medal} onChange={(e) => setMedal(e.target.value)} />
            </label>

            

            <button type="submit">Add Hog</button>
        </form>
        {message && <p>{message}</p>}
        </div>
    );
}
export default HogForm;