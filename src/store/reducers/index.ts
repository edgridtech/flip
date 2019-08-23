import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { storageSync } from 'ngrx-store-ionic-storage';
import { localStorageSync } from 'ngrx-store-localstorage';

import { flipReducer } from '../reducers/flip.reducer';
import { subjectsReducer } from '../reducers/subjects.reducer';
import {AppState} from '../app.state'

export function onSyncError(err) {
  console.log(err);
}

export const reducers: ActionReducerMap<AppState> = {
  flips: flipReducer,
  subjects: subjectsReducer
};


export const storageSyncReducer = storageSync({
  keys: [
    'flips',
    'subject'
  ],
  hydratedStateKey: 'hydrated', // Add this key to the state
  onSyncError: onSyncError      // If a sync fails
});

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
    'flips',
    'subject'
    ],
    rehydrate: true
  })(reducer);
}

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}


export const metaReducers: MetaReducer<AppState>[] = [localStorageSyncReducer];