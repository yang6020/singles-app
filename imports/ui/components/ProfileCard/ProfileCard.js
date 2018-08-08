<<<<<<< HEAD
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


function ProfileCard(props) {
  const { classes, single } = props;
  return (
    <div>
      <Card className={classes.card}>
      <SinglesQueueCard />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Name
          </Typography>
          <Typography component="p">
           Bio
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);
=======
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
>>>>>>> a3519d42452a87726d9aa8a5336de96dd709bfe7
