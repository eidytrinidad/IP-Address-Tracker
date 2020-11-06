import React from 'react'
import { LocationInfo } from './LocationInfo'

export const Header = () => {
    return (
        <header>
          <div className="container">
          <h1>IP Address Tracker</h1>
            <form>
                <input type="text" placeholder='Search for any IP address or domain'/>
                <button className="btn">
                    <img src="/images/icon-arrow.svg" alt="arrow"/>
                </button>
            </form>
          </div>

          <LocationInfo/>
        </header>
    )
}
