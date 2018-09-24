import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

require('./css/MainPage.css')

class MainPage extends Component {
    state = {
        showIns: false,
    }

    showOrHideIns = () => {
        this.setState({ showIns: !this.state.showIns })
    }

    render() {
        return (
            <div className="MainPage">
                <button type='button' onClick={this.showOrHideIns} title='show/hide the instruction'>
                    Show/Hide
                </button>
                {
                    this.state.showIns ?
                        <span>
                            <h2>
                                Sign in if you want to chat in forum or join events
                        <br />
                                Then click on "My Account" to fill the information
                        <br />
                                A complete profile helps you to interact with the website
                        <br />
                            </h2>
                            <hr />
                        </span>
                        :
                        null
                }

                <NavLink to="/Forum/general" className="link" id="to_forum">
                    <div className="unhover">
                        <h3>Forum</h3>
                        <p></p>
                    </div>
                    <div className="hover">
                        <h2>Chat and share anything in the forum!</h2>
                    </div>
                </NavLink>

                {/* <Forum/> */}
                <NavLink to="/Announcement" id="to_ann" className="link">
                    <div className="unhover">
                        <h3>Announcement</h3>
                        <p></p>
                    </div>
                    <div className="hover">
                        <h2>Check important information here!</h2>
                    </div>
                </NavLink>
                {/* <Announcement/> */}
                <NavLink to="/Schedule" className="link" id="to_schedule">
                    <div className="unhover">
                        <h3>Schedule</h3>
                        {/* <p>schdule a match with other team</p> */}
                    </div>
                    <div className="hover">
                        <h2>
                            Sign up for matches!
                            <br />
                            Have fun and practice together
                        </h2>
                    </div>
                </NavLink>
                {/* <Schedule/> */}

                <div id="background"></div>

            </div>

        )
    }
}
export default MainPage