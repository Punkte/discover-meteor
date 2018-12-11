import { Template } from "meteor/templating"
import users from '../../imports/db/users'

Template.list.helpers
(
    {
        users: function() { return users.find() }
    }
)

Template.list.events
(
    {
        "click .delete-btn" : function( event, template ) {
            let id = event.target.id
            users.remove( {"_id": id})
        }
    }
)