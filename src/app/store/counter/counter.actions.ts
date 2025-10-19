import { createAction,props } from "@ngrx/store";

// export const increment = createAction('[Counter] Increment',props<{password:number,email:string}>())
export const increment = createAction('[Counter] Increment',props<{value:number}>())

export const decrement = createAction('[Counter] Decrement');
