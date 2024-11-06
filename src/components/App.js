import React,{useState} from "react";
import Nav from "./Nav";
import HogList from './HogList';
import HogForm from "./HogForm";

import hogsData from "../porkers_data";

function App() {
	const [hogs,setHogs] = useState(hogsData);
	const [filterGreased,setFilterGreased] = useState(false);
   const [sortOption,setSortOption] = useState('');

      const toggleGreasedFilter = () =>setFilterGreased(!filterGreased);

	  const sortHogs = () => {
		return [...hogs].sort((a,b) =>{
			if (sortOption === 'name') return a.name.localeCompare(b.name);
			if (sortOption === 'weight') return a.weight - b.weight;
			return 0;
		});
	  };

   const handleAddHog = (newHog) => {
	setHogs((prevHogs) => [...prevHogs,newHog]);
  }

	  const displayedHogs = sortHogs().filter(hog => !filterGreased || hog.greased);

	  console.log("Displayed Hogs",displayedHogs);
	  

	return (
		<div className="App">
		  <Nav onToggleGreased = {toggleGreasedFilter} setSortOption={setSortOption} />

		  <HogForm onAddHog={handleAddHog} />
			<HogList hogs={displayedHogs}/>
		</div>
		
	);
}
console.log('current hogs');
export default App;
