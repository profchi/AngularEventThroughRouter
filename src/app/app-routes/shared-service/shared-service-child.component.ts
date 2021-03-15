import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'shared-service-child',
  template: `<div class="child">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Shared Service Child Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <button (click)="triggerButtonClick()" class="btn btn-success">Emit Event</button>
                </div>
            </div>`,
})

export class SharedServiceChildComponent{

    constructor(private sharedService: SharedService){}

    triggerButtonClick(){
        this.sharedService.buttonClicked.next();
    }
}