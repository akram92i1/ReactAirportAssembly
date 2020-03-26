import React ,{Component} from 'react'

<<<<<<< HEAD
class ErrorBoundary extends Component {
=======
class ErrorBounday extends Component {
>>>>>>> a23d5de049afe3effdb25e3f8a2ae537ac325bfb
    state = {
        hasError : false , 
        errorMessage : ''
    }

    componentDidCatch = (error , info ) => {
        this.setState({hasError:true,errorMessage : error})
    }
    render(){
        if(this.state.hasError)
        {
            return <h1>{this.state.errorMessage}</h1>
        }
        else{
            return <h1>{this.props.children}</h1>
        }
    }
      
}

<<<<<<< HEAD
export default ErrorBoundary;
=======
export default ErrorBounday;
>>>>>>> a23d5de049afe3effdb25e3f8a2ae537ac325bfb
