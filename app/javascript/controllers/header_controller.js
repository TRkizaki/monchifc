import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log('enter:', enter);
    console.log('leave:', leave);
    console.log('toggle:', toggle);
  }
}
