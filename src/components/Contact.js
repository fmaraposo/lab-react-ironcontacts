import React from 'react';
import contacts from '../contacts.json';
import '../App.css'

class Contact extends React.Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  //Add a Random Actor from the Array
  addRandomActor = () => {
      const myNewActor = [...this.state.contacts];
      const actorIndex = Math.floor(Math.random() * contacts.length)

      myNewActor.push(contacts[actorIndex]);

      this.setState({
          contacts:myNewActor
      })
  }

  //Sort the Array by Name
  sortByName = () => {
      const contactsCopy = [...this.state.contacts];

      function compare (a,b) {
          const nameActorA = a.name.toUpperCase();
          const nameActorB = b.name.toUpperCase();

          let comparison = 0;
          if(nameActorA > nameActorB) {
              comparison = 1;
          } else if (nameActorA < nameActorB) {
              comparison = -1
          }
          return comparison;
      }

      const sortedActors= contactsCopy.sort(compare);


    this.setState ({
        contacts: sortedActors
    })
  }

  //Sort the Array by Popularity
  sortByPopularity= () => {
      const contactsCopy = [...this.state.contacts];

      function compare (a,b) {
          const popularityActorA = a.popularity;
          const popularityActorB = b.popularity;

          let comparison = 0;
          if(popularityActorA >popularityActorB ) {
              comparison = 1;
          } else if (popularityActorA < popularityActorB ) {
              comparison = -1;
          }
          return comparison
      }

      const sortedPopularity = contactsCopy.sort(compare);

      this.setState({
          contacts:sortedPopularity
      })
  }

  //Delete Actors

    deleteActorHandler = (id) => {
        const contactsCopy = [...this.state.contacts];
        const actorToRemoveIndex = contactsCopy.findIndex(item => item.id === id);
        contactsCopy.splice(actorToRemoveIndex,1)
        this.setState({
            contacts:contactsCopy
        })
    }


  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <table className="table-celebs">
            <thead>
                <th>Picture</th>    
                <th>Name</th>    
                <th>Popularity</th>    
            </thead>
            <tbody>
                {this.state.contacts.map((item) =>{
                    return (
                    <tr key={item.id}>
                    <td className="Actor-Image"><img src={item.pictureUrl} alt={item.name}/>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.popularity}</td>
                    <td><button onClick={() => this.deleteActorHandler(item.id)}>Delete</button></td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        <button onClick={this.addRandomActor}>Add Random Actor</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
      </div>
    );
  }
}

export default Contact;
