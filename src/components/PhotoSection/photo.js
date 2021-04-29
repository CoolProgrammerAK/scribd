import React, { Component } from 'react'
import './photo.css'
 class photo extends Component {
    render() {
        return (
            <div className="bg">
                <div className="photoSection">
                      <h2 className="photoHeader">Endless entertainment and knowledge</h2>
                      <p className="photoDesc">Read or listen anytime, anywhere.</p>
                      <button className="photobtn">Read free for 30 days</button>
                      <p className="photoFooter">Only $8.99/month after. Cancel anytime.</p>
                </div>
                <div className="box">
                    </div>
            </div>
        )
    }
}

export default photo
