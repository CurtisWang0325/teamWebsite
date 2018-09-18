import React, { Component } from 'react'
import Player from './Player'

class PlayerList extends Component {
    // state={
    //     players:{},
    // }
    // componentWillMount () {
    //     this.setState({players:this.props.players})
    // }

    
    handleClick = (ev) => {
        // console.log(this.props.user)
        // pos=[ev  .target.name]
        this.props.handleAddPlayer(ev.target.name,this.props.user)  
        // const n=`${this.props.players.top.user.name}`
        // console.log(n)
        // this.findName("top")
    }

    // findName = (pos) =>{
    //     var n= `${pos}: `
    //     n +=`${this.props.players.top.user.name}`||"not yet"
    //     // return n.toString
    //     // console.log(n)
    //     return (
    //         <div>
    //             {n.toString()}
    //         </div>
    //     )
    // }

    render() {
 
        return (
            <div>
                <p>Player:</p>
                <ul>
                    <li>
                        <h6>TOP:</h6> 
                        {this.props.players.top?
                        this.props.players.top.user.name
                        :
                        <button name='top' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <button name= 'jun' type='button' onClick={this.handleClick}>
                            JUN
                        </button>
                            {this.props.players.jun?
                            this.props.players.jun.user.name
                            :
                            "not yet"
                            }
                    </li>
                    <li>
                        <button name= 'mid' type='button' onClick={this.handleClick}>
                            MID
                        </button>
                            {this.props.players.mid?
                            this.props.players.mid.user.name
                            :
                            "not yet"
                            }
                    </li>
                    <li>
                        <button name= 'adc' type='button' onClick={this.handleClick}>
                            ADC
                        </button>
                            {this.props.players.adc?
                            this.props.players.adc.user.name
                            :
                            "not yet"
                            }
                    </li>
                    <li>
                        <button name= 'sup' type='button' onClick={this.handleClick}>
                            SUP
                        </button>
                            {this.props.players.sup?
                            this.props.players.sup.user.name
                            :
                            "not yet"
                            }
                    </li>
                </ul>
            </div>
        )
    }

}





export default PlayerList