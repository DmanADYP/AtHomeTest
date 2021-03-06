/* * * ./app/emitter.service.ts * * */
// Credit to https://gist.github.com/sasxa
// Imports
import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService {
    // Event store
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};
    public static _id:string;
    // Set a new event in the store with a given ID
    // as key
    static get(ID: string): EventEmitter<any> {
        if (!this._emitters[ID]) 
            this._emitters[ID] = new EventEmitter();
            console.log(this._emitters[ID]);
        return this._emitters[ID];
    }
    
    
}