   const obj="jjjjS"
   export const incNumber =(obj)=>{
    return{
        type:"INCREMENT",
        //payload:obj
    }
  }

  export const decNumber =(index)=>{
    return{
        type:"DECREMENT",
      //  payload:index
    }
  }