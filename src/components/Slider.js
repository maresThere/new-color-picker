import React, { Component } from 'react'

class Slider extends Component {
  render () {
    return <div>
      <span>{this.props.name}</span>
      <input type='range' max={this.props.max} onInput={this.props.onInput} step={this.props.step}/>
    </div>
  }
}

export default Slider
