import { Meteor } from "meteor/meteor";
import { Singles } from "../../api/singles";

Meteor.startup(() => {
  if (Singles.find().count() === 0) {
    Singles.insert({
      name: "Justin",
      bio: "hi im justin",
      email: "justin@gg.com"
    });
  }
});
