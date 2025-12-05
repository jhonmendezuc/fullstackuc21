import { configureStore } from "@reduxjs/toolkit";
import contadorReducer from "./contadorSlide";
export default configureStore({
    reducer: {
        contador: contadorReducer
    }
})