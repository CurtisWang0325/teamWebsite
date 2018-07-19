import React from 'react'
import Ann from './Ann'

const AnnouncementLists = ({ann})=>{
        return (
            <div>
                <p>history</p>
                {
                    ann
                    .map(a => (
                    <Ann key={a.id} txt={a.body}/>
                    ))
                }
            
            </div>
        )

}

export default AnnouncementLists