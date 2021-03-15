import { Component } from '@angular/core';
import { PassFunctionChildComponent } from './pass-function-child.component';

@Component({
  selector: 'pass-function',
  template: `<div class="parent">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Pass Function Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Event Emitted {{count}} times</h2>
                </div>
                <router-outlet (activate)="passFunctionToChild($event)"></router-outlet>
            </div>`,
})

export class PassFunctionComponent{
    count = 0;

    incrementCount = () => {
        ++this.count;
    }

    passFunctionToChild(componentRef){
        if (!(componentRef instanceof PassFunctionChildComponent)){
            return;
        }

        componentRef.parentFunction = this.incrementCount;
    }

}