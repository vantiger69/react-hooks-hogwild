import React,{ useState} from "react";

function HogCard({ hog }){
  const [showDetails,setShowDetails] =useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };
return(
  <div className="ho-card" onClick={handleToggleDetails}>
    <h3>{hog.name}</h3>
    <img src={hog.image} alt={hog.image} style = {{width:"200px",heigth:"200px"}}/>
    {showDetails && (
      <div className="hog-details">
        Specialty:{hog.specialty}
        Weigth:{hog.weigth}
        Greased:{hog.greased ? 'Yes' : 'No'}
        Highest Medal Achieved: {hog['highest medal achieved']}
        </div>
    )}
  </div>
)


}
export default HogCard;