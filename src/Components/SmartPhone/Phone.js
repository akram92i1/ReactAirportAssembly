import React,{Component} from 'react';
import '../assests/css/'
class Phone extends Component {

    render(){
         return(
           <div className='PhoneDescription'>
            
              <p>{this.props.name}</p>
              <p>{this.props.UserRate}</p>
              <img src={this.props.urlImage} />
           </div>

         );
    }
}

export default Phone ; 