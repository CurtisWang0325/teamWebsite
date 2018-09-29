import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import p1 from './img/icon1.jpg'
import p2 from './img/icon2.jpg'
import p3 from './img/icon3.jpg'
import p4 from './img/icon4.jpg'
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
                <div id="left">
                    <p id="mainPageTitle">
                        This is the title
                    </p>
                    <p id="mainPageContent">
                        this is content this is content this is content this is content this is content this is content
                    </p>
                </div>
                <div id="right">
                    <div className="pics">
                        <img src={p1}/>
                        <NavLink to="">title navlink</NavLink>
                        <p>content</p>
                    </div>
                    <div className="pics">
                        <img src={p2}/>
                        <NavLink to="">title navlink</NavLink>
                        <p>content</p>
                    </div>
                    <div className="pics">
                        <img src={p3}/>
                        <NavLink to="">title navlink</NavLink>
                        <p>content</p>
                    </div>
                    <div className="pics">
                        <img src={p4}/>
                        <NavLink to="">title navlink</NavLink>
                        <p>content</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default MainPage