/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


//this is including 3 button 

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const DistrictPopup = ({ onClose }) => {
//   const [name, setName] = useState("");
//   const [district, setDistrict] = useState("");

//   const navigate = useNavigate();

//   const districts = ["Select a district", "Dakshina Kannada", "Udupi", "Uttara Kannada"];

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Save user data to server
//       await axios.post("http://localhost:5173/api/submit", { name, district });
//       alert("User saved successfully");

//       // Navigate to the respective page based on selected district
//       if (district === "Dakshina Kannada") {
//         navigate("/dakshina-kannada");
//       } else if (district === "Udupi") {
//         navigate("/udupi");
//       } else if (district === "Uttara Kannada") {
//         navigate("/uttara-kannada");
//       }

//       onClose(); // Close the popup after navigation
//     } catch (error) {
//       console.error("Error saving user:", error);
//     }
//   };

//   const handleCancel = () => {
//     onClose(); // Close the popup or perform any necessary action
//   };

//   const goToDistrictPage = (district) => {
//     // Navigate to the respective district page
//     if (district === "Dakshina Kannada") {
//       navigate("/dakshina-kannada");
//     } else if (district === "Udupi") {
//       navigate("/udupi");
//     } else if (district === "Uttara Kannada") {
//       navigate("/uttara-kannada");
//     }
//     onClose(); // Close the popup after navigation
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-xl font-bold mb-4">Explore More</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">What is your name?</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mt-1 p-2 border border-gray-300 rounded w-full"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Which district do you like?</label>
//             <div className="flex items-center">
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="mt-1 p-2 border border-gray-300 rounded flex-grow"
//                 required
//               >
//                 {districts.map((dist) => (
//                   <option key={dist} value={dist}>
//                     {dist}
//                   </option>
//                 ))}
//               </select>
//               <button
//                 type="button"
//                 className="ml-2 bg-green-500 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => goToDistrictPage(district)}
//                 disabled={district === "Select a district"}
//               >
//                 Go
//               </button>
//             </div>
//           </div>
//           <div className="flex justify-end">
//             <button
//               type="button"
//               className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
            
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DistrictPopup;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DistrictPage = () => {
  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");

  const navigate = useNavigate();

  const districts = ["Select a district", "Dakshina Kannada", "Udupi", "Uttara Kannada"];

  const goToDistrictPage = (district) => {
    // Navigate to the respective district page
    if (district === "Dakshina Kannada") {
      navigate("/dakshina-kannada");
    } else if (district === "Udupi") {
      navigate("/udupi");
    } else if (district === "Uttara Kannada") {
      navigate("/uttara-kannada");
    }
  };

  const handleCancel = () => {
    navigate("/login"); // Navigate back to home page or any other desired page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Explore More</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">What is your name?</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Which district do you like?</label>
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                {districts.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="absolute right-0 top-0 mt-2 mr-2 bg-green-500 text-white font-bold py-1 px-2 rounded"
                onClick={() => goToDistrictPage(district)}
                disabled={district === "Select a district"}
              >
                Go
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DistrictPage;