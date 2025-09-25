
import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    setRuns(runs + 1);
  };

  const handleFour = () => {
    setFours(fours + 1);
    setRuns(runs + 4);
  };

  const handleSix = () => {
    setSixes(sixes + 1);
    setRuns(runs + 6);
  };

  const handleReset = () => {
     alert('All Runs Reset');
    setRuns(0);
    setFours(0);
    setSixes(0);
  };

  return (
    <div>
      <h2>Player: Bangla Batsman</h2>

      {runs >= 50 && <p>🎉 Your Score: 50+</p>}
      {runs >= 100 && <p>🏆 Century!</p>}

      <h4>Total Score: {runs}</h4>
      <p>Fours: {fours} | Sixes: {sixes}</p>

      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}



// import { useState } from "react"


// export default function Batsman() {
//     const [runes, setRuns] = useState(0);
//     const [fours, setFours] = useState(0);
//     const [sixes, setSixes] = useState(0);


//     const handleSingle = () => {
//         const updatedRuns = runes + 1
//         setRuns(updatedRuns)
//     }

//     const handleFour = () => {
//         const updatedRuns = runes + 4
//         const updateFour = fours + 1
//         setFours(updateFour)
//         setRuns(updatedRuns)
//     }

//     const handleSix = () => {
//         const updatedRuns = runes + 6
//         const updatedSix = sixes + 1
//         setSixes(updatedSix)
//         setRuns(updatedRuns)
//     }

//     const handleReset = () => {
//         setRuns(0)
//         setFours(0)
//         setSixes(0)
//     }
//     return (
//         <div>
//             <h2>Player: Bangla Batsman</h2>
//             {runes >= 50 && <p>🎉 Your Score: 50+</p>}
//             {runes >= 100 && <p>🏆 Century!</p>}
//             <h4>Score:{runes} </h4>
//             <p>Four:{fours} || Sixe:{sixes} </p>
//             <button onClick={handleSingle}>singles</button>
//             <button onClick={handleFour}>Four</button>
//             <button onClick={handleSix}>Six</button>
//             <button onClick={handleReset}>Reset</button>

//         </div>
//     )
// }
