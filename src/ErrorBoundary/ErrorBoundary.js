import React ,{Component} from 'react'

class ErrorBounday extends Component {
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

export default ErrorBounday;