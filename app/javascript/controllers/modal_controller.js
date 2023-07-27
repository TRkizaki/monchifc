import { Controller } from "@hotwired/stimulus"
import { enter, leave, toggle } from 'el-transition'

export default class extends Controller {
    connect() {
     enter(document.getElementById('modal-wrapper'));
     enter(document.getElementById('modal-backdrop'));
     enter(document.getElementById('modal-panel'));
   }
 }