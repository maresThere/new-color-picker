import React, { Component } from 'react'
import Swatch from './Swatch'
import Values from './Values'
import Slider from './Slider'
import store from '../store'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  handleHueChange = (event) => {
    store.hue = event.target.value
  }

  handleSatChange = (event) => {
    store.saturation = event.target.value
  }

  handleLightChange = (event) => {
    store.light = event.target.value
  }

  handleAlphaChange = (event) => {
    store.alpha = event.target.value
  }

  render () {
    return <div className='container'>
      <h1>React Color Picker</h1>
      <Swatch hue={store.hue} saturation={store.saturation}
        light={store.light}
        alpha={store.alpha} />

      <Values />

      <div className='sliderHolder'>
        <Slider name='Hue' max='360' onInput={this.handleHueChange} />

        <Slider name='Saturation' max='100' onInput={this.handleSatChange} />
        <Slider name='Light' max='100' onInput={this.handleLightChange} />
        <Slider name='Alpha' max='1' step='.01' onInput={this.handleAlphaChange} />
      </div>
    </div>
  }
}

export default App
