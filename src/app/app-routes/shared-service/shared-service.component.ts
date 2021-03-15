import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from './shared.service';

@Component({
  selector: 'shared-service',
  template: `<div class="parent">
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Shared Service Component</h2>
                </div>
                <div class="col-12 py-3 d-flex justify-content-center">
                    <h2>Event Emitted {{count}} times</h2>
                </div>
                <router-outlet></router-outlet>
            </div>`,
})

export class SharedServiceComponent implements OnInit, OnDestroy{
    count = 0;

    constructor(private sharedService: SharedService){}

    buttonClickedSubscription: Subscription;

    ngOnInit(): void {
        this.buttonClickedSubscription = this.sharedService.getButtonClicked().subscribe(() => ++this.count);
    }

    ngOnDestroy(): void {
        this.buttonClickedSubscription.unsubscribe();
    }

}