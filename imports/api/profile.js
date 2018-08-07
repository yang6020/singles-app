import { Mongo } from "meteor/mongo"

// import {Users} from '../api/'

if (Meteor.isServer) {
    Meteor.publish('users', function usersPublication() {
      return users.find({ owner: this.userId });
    });
  }


Meteor.methods({
    // 'todos.handleCheckbox' (todo) {
    //   if (todo.owner !== this.userId) {
    //     throw new Meteor.Error('todos.handleCheckbox.not-authorized',
    //       'You are not allowed to update to-dos for other users.');
    //   }
    //   ToDos.update(todo._id, {
    //     $set: { isCompleted: !todo.isCompleted },
    //   });
    // },
    'users.submitProfile'(users)  {
        if (users.owner !== this.userId) {
            throw new Meteor.Error (
                'todos.handleToDoSubmit.not-authorized',
                'You are not allowed to add to-dos for other users'
            )
        }
        users.insert(users)
    },
    'users.deleteBio' (users) {
        users.remove(users)
    },
  });