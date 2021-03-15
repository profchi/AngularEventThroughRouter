import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'emitter-subscribe-child',
  template: `<div class="child">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Emitter Subsribe Child Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <button (click)="emitEvent()" class="btn btn-success">Emit Event</button>
                </div>
            </div>`,
})

export class EmitterSubscribeChildComponent{
    clickEvent = new EventEmitter();

    emitEvent(){
        this.clickEvent.emit();
    }
}