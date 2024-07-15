// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About.1";
// import BlogsDetails from "./pages/BlogsDetails";
// import SuggestUs from './pages/SuggestUs';
// import ContactUs from './pages/ContactUs';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="best-places" element={<PlacesRoute />} />
//             <Route path="about" element={<About/>} />
            
//             <Route path="suggestus" element={<SuggestUs />} /> {/* Ensure this line is correct */}
//             <Route path="ContactUs" element={<ContactUs />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;
/********************************** */

/* eslint-disable no-unused-vars */
// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About.1";
// import BlogsDetails from "./pages/BlogsDetails";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SuggestUs from './pages/SuggestUs';
// import ContactUs from './pages/ContactUs';
// import BlogsComp from "./components/Blogs/BlogsComp";
// import DistrictPopup from "./pages/DistrictPopup";
// import DakshinaKannada from "./pages/DakshinaKannada";
// import Udupi from "./pages/Udupi";
// import UttaraKannada from "./pages/UttaraKannada";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="best-places" element={<PlacesRoute />} />
//           <Route path="about" element={<About />} />
//           <Route path="suggestus" element={<SuggestUs />} />
//           <Route path="contactus" element={<ContactUs />} />
//           <Route path="blogscomp" element={<BlogsComp />} />
          
//         </Route>
        
//         {/* Routes outside of Layout */}
//         <Route path="/" component={<DistrictPopup />} >
//         <Route path="/dakshina-kannada" component={<DakshinaKannada />} />
//         <Route path="/udupi" component={<Udupi />} />
//         <Route path="/uttara-kannada" component={<UttaraKannada />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import NoPage from "./pages/NoPage";
// import PlacesRoute from "./pages/PlacesRoute";
// import About from "./pages/About.1";
// import BlogsDetails from "./pages/BlogsDetails";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import SuggestUs from './pages/SuggestUs';
// import ContactUs from './pages/ContactUs';
// import BlogsComp from "./components/Blogs/BlogsComp";
// import DistrictPopup from "./pages/DistrictPopup";
// import DakshinaKannada from "./pages/DakshinaKannada";
// import Udupi from "./pages/Udupi";
// import UttaraKannada from "./pages/UttaraKannada";
// import PlaceDetail from "./pages/PlaceDetail";

// const App = () => {
//   React.useEffect(() => {
//     AOS.init({
//       offset: 100,
//       duration: 900,
//       easing: "ease-in-sine",
//       delay: 100,
//     });
//     AOS.refresh();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="best-places" element={<PlacesRoute />} />
//           <Route path="about" element={<About />} />
//           <Route path="suggestus" element={<SuggestUs />} />
//           <Route path="contactus" element={<ContactUs />} />
//           <Route path="blogscomp" element={<BlogsComp />} />
       
       
//         </Route>

//         {/* Routes outside of Layout */}
//         <Route path="district-popup" element={<DistrictPopup />} />
//         <Route path="dakshina-kannada" element={<DakshinaKannada />} />
//         <Route path="/" element={<DakshinaKannada />} />
//         <Route path="/place/:title" element={<PlaceDetail />} />
//         <Route path="udupi" element={<Udupi />} />
//         <Route path="uttara-kannada" element={<UttaraKannada />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
// above my code

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About.1";
import BlogsDetails from "./pages/BlogsDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import SuggestUs from './pages/SuggestUs';
import ContactUs from './pages/ContactUs';
import BlogsComp from "./components/Blogs/BlogsComp";
import DistrictPopup from "./pages/DistrictPopup";
import DakshinaKannada from "./pages/DakshinaKannada";
import Udupi from "./pages/Udupi";
import UttaraKannada from "./pages/UttaraKannada";
import PlaceDetail from "./pages/PlaceDetail";
import ShreeLakshmiVishnumoorthyTemple from "./pages/ShreeLakshmiVishnumoorthyTemple";
import SubramanyeshwaraTemple from "./pages/SubramanyeshwaraTemple";
import KoilaFarm from "./pages/KoilaFarm";
import Anjaneya from "./pages/Anjaneya";
import CanaraViewpoint from "./pages/CanaraViewpoint";
import Bolle from "./pages/Bolle";

import Uppinakudru from "./pages/Uppinakudru";
import Guddattu from "./pages/Guddattu";
import Kolankal from "./pages/Kolankal";
import Ramalingeshwara from "./pages/Ramalingeshwara";
import Bhimanagudda from "./pages/Bhimanagudda";
import Vibhoothi from "./pages/Vibhoothi";
import Kavala from "./pages/Kavala";

import Moodgal from "./pages/Moodgal";
import Maranakatte from "./pages/Maranakatte";
import Kamalashile from "./pages/Kamalashile";
import Kudumari from "./pages/Kudumari";
import Kabbinale from "./pages/Kabbinale";
import Gadaikallu from './pages/Gadaikallu';
import Anadka from './pages/Anadka';
import Kurumgad from './pages/Kurumgad';
import Apsarkonda from './pages/Apsarkonda.jsx';
import Backwater from './pages/Backwater.jsx';

import Kodsalli from './pages/Kodsalli.jsx';
import Saripalla from './pages/Saripalla.jsx';
import Shishileshwara from './pages/Shishileshwara.jsx';
import LightHouse from './pages/LightHouse.jsx';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="suggestus" element={<SuggestUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="blogscomp" element={<BlogsComp />} />
       
       
        </Route>

        {/* Routes outside of Layout */}
        <Route path="district-popup" element={<DistrictPopup />} />
        <Route path="/place/:title" element={<PlaceDetail />} />
        <Route path="dakshina-kannada" element={<DakshinaKannada />} />
        {/* <Route path="/" element={<DakshinaKannada />} /> */}
       
        <Route path="/place/Shree Lakshmi Vishnumoorthy Temple" element={<ShreeLakshmiVishnumoorthyTemple />} />
        <Route path="/place/Subramanyeshwara Temple" element={<SubramanyeshwaraTemple />} />
        <Route path="/place/Koila Farm" element={<KoilaFarm />} />
        <Route path="/place/CanaraViewpoint" element={<CanaraViewpoint />} />
        <Route path="/place/Bolle" element={<Bolle />} />
        <Route path="/place/Gadaikallu" element={<Gadaikallu />} />
        <Route path="/place/Anadka" element={<Anadka />} />
        <Route path="/place/Saripalla" element={<Saripalla />} />
        <Route path="/place/Shishileshwara" element={<Shishileshwara />} />
        <Route path="udupi" element={<Udupi />} />
        <Route path="/place/Anjaneya" element={<Anjaneya />} />
        <Route path="/place/Uppinakudru" element={<Uppinakudru />} />
        <Route path="/place/Guddattu" element={<Guddattu/>} />
        <Route path="/place/Kolankal" element={<Kolankal/>} />
        <Route path="/place/Moodgal" element={<Moodgal/>} />
        <Route path="/place/Maranakatte" element={<Maranakatte/>} />
        <Route path="/place/Kamalashile" element={<Kamalashile/>} />
        <Route path="/place/Kudumari" element={<Kudumari/>} />
        <Route path="/place/Kabbinale" element={<Kabbinale/>} />
        <Route path="uttara-kannada" element={<UttaraKannada />} />
        <Route path="/place/Ramalingeshwara" element={<Ramalingeshwara/>} />
        <Route path="/place/Bhimanagudda" element={<Bhimanagudda/>} />
        <Route path="/place/Vibhoothi" element={<Vibhoothi/>} />
        <Route path="/place/Kavala" element={<Kavala/>} />
        <Route path="/place/Kurumgad" element={<Kurumgad/>} />
        <Route path="/place/Apsarkonda" element={<Apsarkonda/>} />
        <Route path="/place/Backwater" element={<Backwater/>} />
        <Route path="/place/LightHouse" element={<LightHouse/>} />
        <Route path="/place/Kodsalli" element={<Kodsalli/>} /> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;