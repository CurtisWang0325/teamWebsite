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
      (
      <span>
        <p>
            {this.props.txt}
        </p>
        <button onClick={this.removeMe}>
          <i class="fas fa-minus" title='delete'></i>
        </button>
        <hr/>
      </span>
      )
      : null
  )
  }
  
}





export default Ann