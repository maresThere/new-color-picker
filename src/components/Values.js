import React, { Component } from 'react'

class Values extends Component {
  render () {
    if (this.props.alpha < 1) {
      return <div>
        <div className='valueHolder'>
          <span>{`hsla (${this.props.hue}, ${this.props.saturation}%, ${this.props.light}%, ${this.props.alpha})`}</span>
        </div>
      </div>
    } else {
      return <div>
        <div className='valueHolder'>
          <span>{`hsl(${this.props.hue}, ${this.props.saturation}%, ${this.props.light}%)`}</span>
        </div>
      </div>
    }
  }
}

export default Values
