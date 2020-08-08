import React from 'react';
import { GeneralStore } from '../stores/generalStore';
import { UserStore } from '../stores/userStore';
import { ExpenseStore } from '../stores/expenseStore'

export const generalStore = new GeneralStore();
export const userStore = new UserStore();
export const expenseStore = new ExpenseStore();

export const storesContext = React.createContext({
    generalStore,
    userStore,
    expenseStore,
});