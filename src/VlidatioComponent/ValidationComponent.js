import React from 'react'
const ValidationComponent = (props) => {
   // The CSS Style   
    const Style  = { 
        'font-family'  :' consolas ',
        'background-color' : 'black' ,
         'color' : 'white',
         'width' : '200px',
         'padding' : '20px',
        'position'  : 'relative',
        'left' :'200px'

       
    } ;
    
    const text = {
        1 : "Text to Short" , 
        2 :"Text To Long "
    }

 return (
  <div>
  <p style = {Style}>
    The Lenght Of Your Text :  {props.value}
  </p>
  <div style = {Style}>
      {
          props.value < 5 ?
        <p>{text[1]}</p>  :
        <p> {text[2]}</p>
      }
  </div>
  </div> 
 );
}
export default ValidationComponent ; 