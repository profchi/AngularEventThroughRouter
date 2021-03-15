import { Component } from '@angular/core';

@Component({
  selector: 'pass-function-child',
  template: `<div class="child">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Pass Function Child Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <button (click)="callParentFunction()" class="btn btn-success">Emit Event</button>
                </div>
            </div>`,
})

export class PassFunctionChildComponent{
    parentFunction: Function;

    callParentFunction(){
        if (this.parentFunction){
            this.parentFunction();
        }
    }
}