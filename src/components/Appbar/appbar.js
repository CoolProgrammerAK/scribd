import React, { Component } from 'react'
import './appbar.css'
import MenuIcon from '@material-ui/icons/Menu';
class appbar extends Component {
    render() {
        return (
            <div className="appbar">
                <div className="appbarLeft">
                    <MenuIcon className="appIcon"></MenuIcon>
                    <img className="logo" src="https://s-f.scribdassets.com/images/landing/home2_landing/scribd_logo_horiz_small_white.svg?7ecaf537d" role="img" alt="Scribd" ></img>
                </div>
                <div className="appbarRight">
                  <button className="appbarBtn">Signin</button>
                </div>
            </div>
        )
    }
}

export default appbar
