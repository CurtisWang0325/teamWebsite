import React, { Component } from 'react'
import AnnR from './AnnR'
require("../css/announce.css")
class AnnouncementListsR extends Component {
    render() {

        return (
            <div className="annList">
                {
                    this.props.ann
                        .map(a => (
                            <AnnR t={a.t} txt={a.body} key={a.t} />
                        ))
                }

            </div>
        )
    }

}

export default AnnouncementListsR