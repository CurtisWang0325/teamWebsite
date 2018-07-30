import React, {Component} from 'react'

class MyAccountPage extends Component {
    constructor() {
        super()
    
        this.state = {
            editMode:"false",
            name:"",
        }
      }

    editModeOn = ()=>{
        this.setState({editMode:"true"})
    }

    handleChange = (ev) => {
        this.setState({name:ev.target.value})
    }

    render() {
        return (
            <span>
                <button onClick={this.editModeOn}>Edit</button>
                
                <h1>{`Name: ${this.state.name?this.state.name:this.props.user.googleName}`}</h1>

                <form>
                    <div>
                        <input 
                            type="text"
                            placeholder="Enter new name"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            />
                    </div>
                </form>
            </span>
        )
    }
}

export default MyAccountPage