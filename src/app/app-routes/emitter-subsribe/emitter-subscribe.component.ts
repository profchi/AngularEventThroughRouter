import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmitterSubscribeChildComponent } from './emitter-subscribe-child.component';

@Component({
  selector: 'emitter-subscribe',
  template: `<div class="parent">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Emitter Subsribe Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Event Emitted {{count}} times</h2>
                </div>
                <router-outlet (activate)="subscribeToEmmiter($event)" (deactivate)="unsubscribe()"></router-outlet>
            </div>`,
})

export class EmitterSubscribeComponent{
    count = 0;
    subscription: Subscription

    subscribeToEmmiter(componentRef){
        if (!(componentRef instanceof EmitterSubscribeChildComponent)){
            return;
        }
        const child : EmitterSubscribeChildComponent = componentRef;
        child.clickEvent.subscribe( () => {
            ++this.count;
        });
    }

    unsubscribe(){
        if (this.subscription){
            this.subscription.unsubscribe();
        }
    }
}
