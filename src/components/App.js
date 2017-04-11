import React, { Component } from 'react'
import Swatch from './Swatch'
import Values from './Values'
import Slider from './Slider'

class App extends Component {
  state= {
    hue: 99,
    saturation: 99,
    light: 50,
    alpha: 1
  }

  handleHueChange = (event) => {
    this.setState({
      hue: event.target.value
    })
  }

  handleSatChange = (event) => {
    this.setState({
      saturation: event.target.value
    })
  }

  handleLightChange = (event) => {
    this.setState({
      light: event.target.value
    })
  }

  handleAlphaChange = (event) => {
    this.setState({
      alpha: event.target.value
    })
  }

  render () {
    return <div className='container'>
      <h1>React Color Picker</h1>
      <Swatch hue={this.state.hue} saturation={this.state.saturation} light={this.state.light} alpha={this.state.alpha} />

      <Values hue={this.state.hue} saturation={this.state.saturation} light={this.state.light} alpha={this.state.alpha} />

      <div className='sliderHolder'>
        <Slider name='Hue' max='360' onInput={this.handleHueChange} />

        <Slider name='Saturation' max='100' onInput={this.handleSatChange} />
        <Slider name='Light'  max='100' onInput={this.handleLightChange} />
        <Slider name='Alpha' max='1' step='.01' onInput={this.handleAlphaChange} />
      </div>
    </div>
  }
}

export default App
