/* eslint-disable no-unused-vars */
//contactus.jsx


// import './ContactUs.css'; // Import the CSS file

// const ContactUs = () => {
//   return (
//     <div className="container pt-14">
//     <div className="py-10">
//       <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//     Contact Us
//       </h1>
//     </div>
//     <div className="contact-us-form">
//       </div>
//     <div className="contact-us">
//       <h1>Contact Us</h1>
//       <form action="https://formspree.io/f/mvojenlk" method="POST">
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" name="name" required />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="email" name="email" required />
//         </div>
//         <div className="form-group">
//           <label>Message:</label>
//           <textarea name="message" required></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// export default ContactUs;
  

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
 import './ContactUs.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("mldrdwjn");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container pt-14">
    <div className="py-10">
      <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
    Contact Us
      </h1></div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /><label htmlFor="text">
    Message
    </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      {/* <button type="submit"  disabled={state.submitting}>
        Submit
      </button> */}

<button type="submit" className="btn btn-primary" disabled={state.submitting}>
          Submit
        </button>
    </form></div>
  );
}

function ContactUs() {
  return (
    <ContactForm />
  );
}

export default ContactUs;