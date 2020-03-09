import React, { Component } from 'react';
import './App.css';
import Person from '../Components/Persons/Person/Person';
import ValidationComponent from '../VlidatioComponent/ValidationComponent'
import CharComponent from '../CharComponent/CharComponent';
import Radium,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    lengthText : null,
    // To Store The Input text Value 
    TheTextContent : "" , 
    ArrChar : []
  }
//------------------------------Function to change the value of name on the component -------------------------------------
  nameChangedHandler = ( event, id ) => {
    // it's will return the first id in the state that have the index like the (id) on the fuction  parameter 
     const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
     });
    
    
    // We will return all the person list with the specify personIndex 
    const person = {
      ...this.state.persons[personIndex]
    };

    //---> Another methode // const person = Object.assign({}, this.state.persons[personIndex]);
    // we will change the person value on the state 
    person.name = event.target.value;
    //it's will return a copy of the persons on the state 
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    // best methode to change the content of state without causing error 
    this.setState( {persons: persons} );
  }
  //----------------------------------------------------------------------------------------------------------

  //----------------------------- The function that allows you to delete a Person component by just clicking ------------
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    // With these method We Create a Copy Of My State Value 
    const persons = [...this.state.persons];
    // to remove an element from the state with the safe methode 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
 //----------------------------------------------------------------------------------------------------------------------
 
 //--------------------------------------Function to change the showing persons component --------------------------------
 togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // Change the boolean value of the text 
    this.setState( { showPersons: !doesShow } );
  }
//------------------------------------------------------------------------------------------------------------------------
 
 
//-----------------------------This function allows to split the text content ----------------------
  LengthOutputHandler = (event) => {
   console.log(event.target.value.length)
   const len = event.target.value.length ; 
   var arr = this.state.ArrChar;
   // push the value on the array 
   arr.push(event.target.value)
   this.setState({
    lengthText : len,
    TheTextContent : event.target.value,
    ArrChar : arr
   });
   console.log("The Value is :::"+this.state.ArrChar+"And the Length is : "+this.state.ArrChar.length)
  }
  //---------------------------------------------------------------------------------------------



  render () {
    //---------------------------------- The CSS Style List -------------------------------
    const style = {
      backgroundColor: 'blue',
      font: 'inherit',
      border: '1px solid gray',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        'backgroundColor' : 'salmon' , 
        'color' : 'red '
      }
    };
    //-------------------------------------------------------------------------------------

    const inputs = (
      <div style = {style}>
          <input type="text" onChange = { this.LengthOutputHandler }   />
          <ValidationComponent value={this.state.lengthText} />
      </div>
    );

   var data = ""  ; 
   var Arr = []
   let Charvalue = null
   data = this.state.TheTextContent
   Arr = data.split('')
   console.log("LA VALEUR DE ARR ::::::"+Arr)
   Charvalue = (
     <div style = {style}>
         {
           Arr.map((CharVal)=>{
            return <CharComponent 
            val = {CharVal}
              />  
          })

         } 
     </div>
   );
   
          /*
          
             How map methode work 
               ----> Persons[
                   {person} , 
                   {person} , 
                   {peron}
               ]
          
          when i call the map function it's will : 
              persons.map(Person) => {
                 
                return <MyPerson component i'ts depande about the number of persons component 
                         |
                         |____> with all person element 
              }
          
          
          */



   let persons = null;

   if ( this.state.showPersons ) {
     persons = (
       <StyleRoot>
       <div>
         {this.state.persons.map((person, index) => {
           return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name} 
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)} />
         })}
       </div>
       </StyleRoot>
     );
   }

   const personStyle = [] ; 
   // It's affect the buuton style 
   if (this.state.persons.length  <= 2 )
      { 
        personStyle.push('red')
      } 
    if(this.state.persons.length <=1 )
    {
      personStyle.push('bold') ; 
    }
    //------------------------------
   
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {personStyle.join(' ')}>This is really working!</p>
        <button 
          className = {personStyle.join(' ')}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}    
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default  Radium(App) ; 