import { useState } from "react";
import data from "../utils/data";

//single selection basic
const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  return (
    <div className="wrapper flex flex-col">
      <div className="accordian text-black pt-20">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div
              className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
              key={dataItem.id}
            >
              {/* accordian header */}
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex justify-between cursor-pointer"
              >
                <h3 className="font-bold text-lg">{dataItem.question}</h3>
                <span className="font-bold text-xl">
                  {selected === dataItem.id ? "-" : "+"}
                </span>
              </div>

              {/* accordian body */}
              {selected === dataItem.id && (
                <div className="acc-content ">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;

//single selection basic way (namaste react)
// const Accordian = ({ question, answer, id }) => {
//   const [showItems, setShowItems] = useState(false);

//   const handleClick = () => {
//     setShowItems(!showItems);
//   };

//   return (
//     <div className="w-6/12 mx-auto my-4 shadow-lg p-4 text-black">
//       {/* accordian header */}
//       <div
//         className="flex justify-between cursor-pointer"
//         onClick={handleClick}
//       >
//         <h3 className="font-extrabold text-lg">{question}</h3>
//         <span className="font-extrabold text-lg">{showItems ? "-" : "+"}</span>
//       </div>

//       {/* accordian body */}
//       <div className="py-1 font-bold text-lg">
//         {showItems && <h5 className="py-4">{answer}</h5>}
//       </div>
//     </div>
//   );
// };

//multiselction ans signle selection
// const Accordian = () => {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   const handleSingleSelectionBtn = () => {
//     setEnableMultiSelection(!enableMultiSelection);
//   };

//   const handleSingleSelection = (currentId) => {
//     setSelected(currentId === selected ? null : currentId);
//   };

//   //littel bit tricky below function
//   const handleMultiSelection = (currentId) => {
//     let cpyMultiple = [...multiple];
//     const findIndexOfCurrentId = cpyMultiple.indexOf(currentId);
//     findIndexOfCurrentId === -1
//       ? cpyMultiple.push(currentId)
//       : cpyMultiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMultiple);
//   };

//   return (
//     <div className="wrapper flex flex-col">
//       <button
//         className="p-2 mt-10 px-5 m-2 text-white text-lg bg-black rounded-xl flex justify-center mx-auto w-[20%]"
//         onClick={handleSingleSelectionBtn}
//       >
//         {enableMultiSelection ? "Multi Selection ON" : "Multi Selection OFF"}
//       </button>

//       <div className="accordian text-black pt-20">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div
//               className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
//               key={dataItem.id}
//             >
//               {/* accordian header */}
//               <div
//                 onClick={
//                   enableMultiSelection
//                     ? () => handleMultiSelection(dataItem.id)
//                     : () => handleSingleSelection(dataItem.id)
//                 }
//                 className="flex justify-between cursor-pointer"
//               >
//                 <h3 className="font-bold text-lg">{dataItem.question}</h3>
//                 <span className="font-bold text-xl">
//                   {selected === dataItem.id ? "-" : "+"}
//                 </span>
//               </div>
//               {/* accordian body */}
//               {enableMultiSelection
//                 ? multiple.indexOf(dataItem.id) !== -1 && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )
//                 : selected === dataItem.id && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )}
//             </div>
//           ))
//         ) : (
//           <div>No data found !</div>
//         )}
//       </div>
//     </div>
//   );
// };
