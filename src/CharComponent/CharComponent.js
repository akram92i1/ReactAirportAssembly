import React from 'react' ; 
const CharComponent = (props) => {

    const style2 = { 
        'font-face ': 'consolas' , 
        'border' :'1px solid #ccc',
        'padding' : '8px' ,
        'display' : 'inline', 
         'box-shadow': '5px 10px #888888' ,
         'height' : '100px' ,
         'width' : '100px'
  
      }
      

    return (
        <p style = {style2}>{props.val}</p>
    );
}
export default CharComponent;