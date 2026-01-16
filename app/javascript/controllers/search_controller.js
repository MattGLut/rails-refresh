import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Search controller connected")
    this.timeout = null
  }

  submit(event) {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      console.log("Searching...")
      this.element.requestSubmit()
    }, 300)
  }
}