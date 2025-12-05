import { createSlice } from "@reduxjs/toolkit";



const contadorSlice = createSlice({
  name: "contador",
  initialState: {
    contador: 0
  },
  reducers: {
    incrementar: (state) => {
      state.contador++
    } 
  }
})

export const { incrementar } = contadorSlice.actions //para usar en la vista
export default contadorSlice.reducer // para usar en el store
