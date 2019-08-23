import { Action } from '@ngrx/store'
import * as data from './data'

const initialState = data.subjects


export function subjectsReducer( state = initialState) {
    return state
}