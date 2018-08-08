import React from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import UploadForm from "../../components/uploadForm";
import { Singles } from "../../../api/singles";
import SinglesQueueCard from "../../components/SinglesQueueCard/SinglesQueueCard";

const Profile = props => {
  const { classes } = props;
  const owner = Meteor.userId();
  let single = Singles.find({ _id: owner }).fetch();
  console.log(single[0]);
  // function singleData (single){
  //   let nameBio=[]
  //   nameBio.push(single[0]["name"])

  //   return nameBio
  // }
  return (
    <div>
      {/* className={classes.root} */}
      {/*
      <Form
        onSubmit={(values, form) => {
          Meteor.call("singles.addSingle", {
            name: values.name,
            bio: values.bio,
            _id: owner + 9
          });
          console.log(showMeSingles());
          form.reset();
        }}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine, values, form }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Field component="input" name="name" type="text" label="Name">
                {({ input, meta }) => (
                  <TextField
                    style={{
                      paddingTop: 20,
                      width: "100%",
                      paddingBottom: 20
                    }}
                    placeholder="Name"
                    {...input}
                  />
                )}
              </Field>
            </div>
            <div>
              <Field component="input" name="bio" type="text" label="Bio">
                {({ input, meta }) => (
                  <TextField
                    style={{ width: "100%" }}
                    placeholder="Bio"
                    multiline
                    {...input}
                  />
                )}
              </Field>
            </div>
            <div style={{ paddingTop: 20 }}>
              <Button
                variant="contained"
                disabled={submitting || pristine}
                color="primary"
                type="submit"
              >
                Match
              </Button>
            </div>
          </form>
        )}
      />
      <TestCard />
      <Steppers /> */}

      <p>BAMBABMABMAMMBA</p>
      <SinglesQueueCard />
      <ProfileCard
        name={single[0] && single[0].name}
        bio={single[0] && single[0].bio}
      />
      <UploadForm />
    </div>
  );
};

export default Profile;
