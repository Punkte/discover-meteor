import { Template } from "meteor/templating"
import users from "../../imports/db/users"


Template.form.events
(
    {
        "submit #form" : function( event, template )
        {
            event.preventDefault()
            users.insert
            (
                { 
                    user : {
                        nom: template.find( "#nom" ).value,
                        prenom: template.find( "#prenom" ).value,
                        github: template.find( "#github" ).value
                    }
                }
            )
        }

    }
)