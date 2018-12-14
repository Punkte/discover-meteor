import React, { Component } from 'react'
import users from '../db/users'

class Form extends Component {
    state = {
        nom: '',
        prenom: '',
        github: '',
    }

    insertValue = (e) => {
        e.preventDefault()
        users.insert( {
            user : {
                nom: this.state.nom, 
                prenom: this.state.prenom, 
                github: this.state.github
            }
          } )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={ this.insertValue }>
                <label htmlFor="nom">nom</label>
                <input 
                    name="nom"
                    onChange={ this.handleChange }
                />
                <label htmlFor="prenom">prenom</label>
                <input 
                    name="prenom"
                    onChange={ this.handleChange }
                />
                <label htmlFor="github">github</label>
                <input 
                    name="github"
                    onChange={ this.handleChange }
                />
                <button type="submit">Envoyer</button>
            </form>
        )
    }
}

export default Form
  