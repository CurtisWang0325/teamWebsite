import React, { Component } from 'react'
import AnnR from './AnnR'

class AnnouncementListsR extends Component {
    render() {

        return (
            <div>
                <p>history</p>
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