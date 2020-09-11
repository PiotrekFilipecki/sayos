import React from 'react'
// import PropTypes from 'prop-types'
import Consumer from "../../../context"

const Menu = ({ data }) => {
    return (

        <Consumer>
        {({navToggled}) => (
        <div className={`menu ${navToggled ? `active` : ""}`}>
            <div className="menu-left">
                {data.adressData1}
            </div>

            <div className="menu-right">
                
            </div>
        </div>
        )}
        </Consumer>
    )
}

export default Menu
