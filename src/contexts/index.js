import React from 'react';
import { GeneralStore } from '../stores/generalStore';
import { UserStore } from '../stores/userStore';
import { AppStore } from '../stores/appStore'

export const generalStore = new GeneralStore();
export const userStore = new UserStore();
export const appStore = new AppStore();

export const storesContext = React.createContext({
    generalStore: generalStore,
    userStore: userStore,
    appStore: appStore,
});