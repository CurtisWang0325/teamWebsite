import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'
import AccountInfo from './AccountInfo'

class MyAccountPage extends Component {
    constructor() {
        super()
    
        this.state = {
            // editMode:"false",
            tempName:"",
            name:"",
        }
      }

    // editModeOn = ()=>{
    //     this.setState({editMode:"true"})
    // }

    handleChange = (ev) => {
        this.setState({tempName:ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.setState({name:this.state.tempName})
    }

    render() {
        return (
            <span>
                <NavLink to="/MyAccountPage/editMode">
                    <button>Edit</button>
                </NavLink>
                
                <h1>{`Name: ${this.state.name?this.state.name:this.props.user.googleName}`}</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            type="text"
                            placeholder="Enter new name"
                            value={this.state.tempName}
                            onChange={this.handleChange}
                            />
                    </div>
                </form>
                <Route path="/MyAccountPage/editMode" component={AccountInfo}/>
            </span>


        )
    }
}

export default MyAccountPage