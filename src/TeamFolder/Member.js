import React, { Component } from 'react'

class Member extends Component {


  render() {
      const user=this.props.member
        return (
            <div>
                <h1>
                    {user.name}
                </h1>
                <h4>IGN: {user.IGN}</h4>
                <h4>Position: {user.position}</h4>
                <h4>Level: {user.level}</h4>
                <p>{user.aboutMe}</p>
                <hr/>
            </div>


        )
  }

}


export default Member