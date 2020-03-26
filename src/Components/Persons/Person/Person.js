<<<<<<< HEAD
import React ,{Component} from 'react';
import Radium,{StyleRoot} from 'radium';
import './Person.css';
class Person extends Component  {

   render (){
    const style = {
        '@media(min-width : 500px)' : {
             'width' : '450px'
        }
    }
            console.log('[Person.js] is rendering...');
            return (
        
                    <div className="Person" style={style}>
                        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                        <p>{this.props.children}</p>
                        <input type="text" 
                        onChange={this.props.changed} 
                        value={this.props.name} />
                    </div>
            
            );
   }
   
}

export default Radium(Person);
=======
import React from 'react';
import Radium,{StyleRoot} from 'radium';
import './Person.css';

const person = ( props ) => {
   
   
    const style = {
        '@media(min-width : 500px)' : {
            'width' : '450px'
        }
    }
    return (
   
            <div className="Person" style={style}>
                <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
            </div>
     
    )
};

export default Radium(person);
>>>>>>> a23d5de049afe3effdb25e3f8a2ae537ac325bfb
