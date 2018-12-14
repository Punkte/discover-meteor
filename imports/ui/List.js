import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data';
import users from '../db/users'


class List extends Component {


    deleteById = e => {
        let _id = e.target.id
        users.remove({ _id })
    }

    render() {
        return(
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Github</th>
                    <th>Delete</th>
                </tr>

                {this.props.users.map((item, index) => (
                    <tr>
                        <td>{ item.user.nom }</td>
                        <td>{ item.user.prenom }</td>
                        <td>
                            <a target="_blank" href={`http://github.com/${ item.github }`}>
                            { item.user.github }
                            </a>
                        </td>
                        <td>
                            <button     
                                id={ item._id } 
                                class="delete-btn"
                                onClick={ this.deleteById }
                                >
                                Delete</button>
                        </td>
                    </tr>

                ))}
            </table>
        )
    }
}

export default ListContainer = withTracker(() => {
    return {
      users: users.find().fetch(),
    };
  })(List);
  