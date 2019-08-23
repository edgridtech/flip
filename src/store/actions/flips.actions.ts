import {Injectable} from '@angular/core';  
import {Action} from '@ngrx/store';
import {Flip} from '../interfaces/flip.model'

export const SAVE_FLIPS = "SAVE_FLIPS"
export const DELETE_FLIP = "DELETE_FLIP"
export const SELECT_FLIP = "SELECT_FLIP"

export class saveFlips implements Action {
    readonly type = SAVE_FLIPS 
    constructor(public payload: Flip[]) {}
}

export class selectFlip implements Action {
    readonly type = SELECT_FLIP 
    constructor(public payload: Flip) {}
}

export class deleteFlip implements Action {
    readonly type = DELETE_FLIP 
    constructor(public payload: Flip[]) {}
}

export type Actions =  saveFlips | deleteFlip | selectFlip
