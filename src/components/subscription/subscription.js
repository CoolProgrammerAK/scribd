import React, { Component } from 'react'
import './subscription.css'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HeadsetIcon from '@material-ui/icons/Headset';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import MicNoneIcon from '@material-ui/icons/MicNone';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DescriptionIcon from '@material-ui/icons/Description';
class subscription extends Component {
    render() {
        return (
            <div>
                <div className="subscriptionContainer">
                    <div className="subscriptionTop">
                        <h2 className="subscriptionHeader">All in one simple subscription</h2>
                        <div className="subscriptionIconContainer">
                            <div className="subscriptionIconBox">
                                <MenuBookIcon className="subscriptionIcon"></MenuBookIcon>
                                <p className="subscriptionIconText">Books</p>

                            </div>
                            <div className="subscriptionIconBox">
                                <HeadsetIcon className="subscriptionIcon"></HeadsetIcon>
                                <p className="subscriptionIconText">AudioBooks</p>

                            </div>
                            <div className="subscriptionIconBox">
                                <LibraryBooksIcon  className="subscriptionIcon"></LibraryBooksIcon >
                                <p className="subscriptionIconText">Magazines</p>

                            </div>
                            <div className="subscriptionIconBox">
                                <MicNoneIcon className="subscriptionIcon"></MicNoneIcon>
                                <p className="subscriptionIconText">Podcasts</p>

                            </div>
                            <div className="subscriptionIconBox">
                                <MusicNoteIcon className="subscriptionIcon"></MusicNoteIcon>
                                <p className="subscriptionIconText">Sheet Music</p>

                            </div>
                            <div className="subscriptionIconBox">
                                < DescriptionIcon className="subscriptionIcon"></ DescriptionIcon>
                                <p className="subscriptionIconText">Documents</p>

                            </div>

                        </div>
                    </div>
                    <div className="subscriptionBottom">
                        <div className="subscriptionBottomIcon"></div>
                        <div className="subscriptionBottomTextBox">
                            <span className="subscriptionBottomText">Scribd is overall the best and most convenient deal for online reading.</span>
                            <span className="subscriptionBottomIconText">Business Insider</span>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default subscription
