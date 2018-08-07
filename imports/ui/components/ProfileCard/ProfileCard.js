import React from "react";
import ReactDOM from "react-dom";
import { Form, Field } from "react-final-form";

// const validate = values => { };
// const onSubmit = values => { };

const ProfileCard = ({ inputRef, submitProfile }) => {
  return (
    <div>
      <Form
        onSubmit={event => submitProfile(event)}
        validate={values => {
          const errors = {};
          if (!values.controlled) {
            errors.controlled = "Required";
          }
          // if (!values.uncontrolled) {
          //     errors.uncontrolled = "Required"
          // }
          return errors;
        }}
        render={({ handleSubmit, pristine, invalid, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="controlled"
              render={({ input, meta }) => (
                <div>
                  <label>Controlled Input</label>
                  <input
                    type="text"
                    ref={inputRef}
                    {...input}
                    placeholder="Add your bio here"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                  {/* {console.log(meta)} */}
                </div>
              )}
            />

            <button type="submit"> Update Profile</button>
          </form>
        )}
      />

      <div id="myOutput">Your input will Appear here</div>
    </div>
  );
};

// getData(cats) {

//     console.log(cats.controlled)
//     console.log(cats.uncontrolled)
//     return document.getElementById('myOutput').innerHTML =
//         `<p> First Name: ${cats.controlled}</p>
//         <p> Last Name: ${cats.uncontrolled} </p>`
// }

// render() {
//     return (
//         <div>
//             <h3>React Form Basis by Andrei</h3>

//             <Form
//                 onSubmit={this.getData.bind(this)}
//                 validate={values => {
//                     const errors = {};
//                     if (!values.controlled) {
//                         errors.controlled = "Required"
//                     }
//                     if (!values.uncontrolled) {
//                         errors.uncontrolled = "Required"
//                     }
//                     return errors
//                 }}
//                 render={({ handleSubmit, pristine, invalid, values }) => (
//                     <form onSubmit={handleSubmit}>

//                         <Field
//                             name="controlled"
//                             render={({ input, meta }) => (

//                                 <div>
//                                     <label>Controlled Input</label>
//                                     <input
//                                         type="text"
//                                         ref={inputRef}
//                                         {...input}
//                                         placeholder="Add your bio here"
//                                     />
//                                     {meta.touched && meta.error && <span>{meta.error}</span>}
//                                     {/* {console.log(meta)} */}
//                                 </div>

//                             )}

//                         />
//                         <Field
//                             name="uncontrolled"
//                             render={({ input, meta }) => (
//                                 <div>
//                                     <label>Uncontrolled Input</label>
//                                     <input
//                                         {...input}

//                                         placeholder="Last Name"

//                                     />
//                                     {meta.touched && meta.error && <span>{meta.error}</span>}
//                                 </div>
//                             )}
//                         />

//                         <button type="submit"> Update Profile</button>
//                     </form>
//                 )}
//             />

//             <div id="myOutput">Your input will Appear here</div>
//         </div>
//     )

// }

export default ProfileCard;
