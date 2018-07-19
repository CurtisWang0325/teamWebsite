import React, {Component} from 'react'


class Ann extends Component {
  state={
    deleted : false,
  }
  
  removeMe = (ev) => {
    this.setState({deleted:true})
  }

  render(){
    return (
      !this.state.deleted ? 
      <span>
        <p>
            {this.props.txt}
        </p>
        <button onClick={this.removeMe}>
          delete
        </button>
      </span>
      : null
  )
  }
  
}





export default Ann