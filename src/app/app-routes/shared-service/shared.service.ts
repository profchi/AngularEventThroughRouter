import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class SharedService{

    buttonClicked = new Subject();

    getButtonClicked(){
        return this.buttonClicked.asObservable();    
    }
}