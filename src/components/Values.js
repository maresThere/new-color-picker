import React, { Component } from 'react'
import store from '../store'

class Values extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div>
        <div className='valueHolder'>
          <span>{store.color}</span>
        </div>
      </div>
    } else {
      return <div>
        <div className='valueHolder'>
          <span>{store.color}</span>
        </div>
      </div>
    }
  }
}

export default Values
