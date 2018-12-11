import { Meteor } from 'meteor/meteor'

import users from "../imports/db/users"

let user = {
  nom: "Priou", 
  prenom: "Eric",
  github: "heticeric"
}

Meteor.startup(() => {
  if( users.find().count() <= 0 )
  {
    users.insert( { user } )
  }
})
