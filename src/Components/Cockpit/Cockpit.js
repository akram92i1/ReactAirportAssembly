import React,{useEffect} from 'react'; 
import  classes  from './cockpit.css';
import Radium from 'radium';
const Cockpit = (props) => {
    // ----------- The logic is always come before the return -------------
    let btnClass = ''; 
     useEffect(()=>{
      //Http request for example 
      console.log('%c  [Cockpit.js]  useEffect.... ','color : blue; ')
      setTimeout( ()=>{
        alert("Saved date to cloud !!! ") ; 
      } ,1000); 

      return ()=> {
        console.log('%c  [Cockpit.js] cleanup in useEffect.... ','color : blue; ');
      };

      console.log(' %c [Cockpit.js]  useEffect..' ,'color: yellow'); 
       
     },/* We pass an empty array for the first execution */[]);

     useEffect(() => {
       console.log('%c [Cockpit.js]   2nd useEffect.... ' , 'color : green '); 
       return ()=> {
        console.log('%c  [Cockpit.js] cleanup in 2nd useEffect.... ','color : green; ');
      };
     });
    
    if(props.showPersons)
        {
         btnClass = classes.red;
        }
    else {
        btnClass = classes.bold;
    } 

    const assignedClasses = [] ; 
    // It's affect the button style 
    if (props.persons.length  <= 3 )
       {
      
         assignedClasses.push('red');
       } 
    if (props.persons.length  <= 2 )
       {
         alert("i'am on the 2 ") ;  
         assignedClasses.push('red');
       } 
     if(props.persons.length <=1 )
     {
       alert("i'am on the 1");
       assignedClasses.push('bold') ; 
     }
  
     //------------------------------

    // --------------------------------------------------------------------
    return( 
      <div className={'Cockpit'}>
        <h1>{props.title}</h1>
        <p className={classes.red}>This is really working!</p>
        <button className={assignedClasses.join(' ') } onClick={props.clicked}>
            Toggle Persons
        </button>
      </div>
    )

} ; 
export default Radium(Cockpit) ; 