import { observable, computed } from 'mobx'

class Store {
@observable hue = 99
@observable saturation = 99
@observable light = 50
@observable alpha = 1

@computed
  get color () {
    if (this.alpha < 1) {
      return `hsla (${store.hue}, ${store.saturation}%, ${store.light}%, ${store.alpha})`
    } else {
      return `hsl(${store.hue}, ${store.saturation}%, ${store.light}%)`
    }
  }
}
const store = new Store()

export default store
