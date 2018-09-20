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
                {/* <p>Player:</p> */}
                <ul>
                    <li>
                        <h4>TOP:</h4> 
                        {this.props.players.top?
                        <Player player={this.props.players.top.user}/>
                        :
                        <button name='top' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>JUN:</h4> 
                        {this.props.players.jun?
                        <Player player={this.props.players.top.user}/>
                        :
                        <button name='jun' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>MID:</h4> 
                        {this.props.players.mid?
                        <Player player={this.props.players.top.user}/>
                        :
                        <button name='mid' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>ADC:</h4> 
                        {this.props.players.adc?
                        <Player player={this.props.players.top.user}/>
                        :
                        <button name='adc' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                    <li>
                        <h4>SUP:</h4> 
                        {this.props.players.sup?
                        <Player player={this.props.players.top.user}/>
                        :
                        <button name='sup' type='button' onClick={this.handleClick}>
                        SIGN UP
                        </button>
                        }
                    </li>
                </ul>
            </div>
        )
    }

}





export default PlayerList