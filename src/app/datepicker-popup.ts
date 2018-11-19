import { Component } from '@angular/core';

@Component({
  selector: 'demo-datepicker-basic',
  template: `<div class="row">
  <div class="col-xs-12 col-12 col-md-4 form-group">
    <input id="myInput1"
           placeholder="SEARCH FOR DATE"
           class="form-controls"
           bsDatepicker>
  </div>`,
  styleUrls: ['./app.component.scss'],
})
export class DemoDatepickerBasicComponent {}
