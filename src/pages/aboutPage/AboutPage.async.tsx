import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise((res) => {
    setTimeout(() => {
        // @ts-ignore
        //задержка сделана для наглядости,так делать не будем
        res(import('./AboutPage'))
    }, 1000)
}));