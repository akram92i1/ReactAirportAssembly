
import React , {Component} from 'react';
import Person from './Person/Person';


class Persons extends Component  {

  // static getDerivedStateFromProps( props , state ){
  //   console.log("[Persons.js] getDerivedStateFromProps ....",props)
  //   return state ; 
  // }


  shouldComponentUpdate(nextProps , nextState) {
    console.log('[Persons.js] shouldComponentUpdate ....' ) ; 
    return true ; 
  }

  getSnapshotBeforeUpdate(prevProps , prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate ...') ; 
    return {message : this.props.persons} ; 
  }

  componentDidUpdate(prevProps , prevState , Snapshot ){
    console.log('[Persons.js] componentDidUpdate....');
    console.log(Snapshot);
  }

  componentWillUnmount(){
    console.log('%c [Persons.js ] componentWillUnmount ','color : red'); 
  }

   render (){
    console.log('[Persons.js] is rendering ...');
    return(
        
        this.props.persons.map((person, index) => {
        return <Person
          click={() => this.props.delete(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.props.change(event, person.id)} />
      })   
      );
    }
    
   }

export default Persons ; 
