import React, { Component } from 'react'
import store from '../store'

class Swatch extends Component {
  render () {
    let color = `hsla(${store.hue}, ${store.saturation}%, ${store.light}%, ${store.alpha})`
    return (
      <div>
        <div className='swatch' style={{ backgroundColor: color }} />
      </div>
    )
  }
}

export default Swatch
