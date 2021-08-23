// function useForm > function custom useState buatan 

import { useState } from "react"

/* 1. membuat state 
    - useState(initialValue) > nilai default yang di kirimkan dari useForm
   2. return nilai dengan array [] 
    - [values, (formType, formValue) => { return setValue({...values, [typeForm] : valueForm})}] 
    - Values > nilai awal yang dikirimkan dari state values 
    - (typeForm, valueForm) => {return setValue({...values, [typeForm] : valueForm})} > function yang parameternya 'typeForm' dan 'valueForm' mengembalikan nilai state setValue yang bernilai 2 object 
    - ...values > nilai values sebelumnya dari state values
    - [typeForm] > tipe yang dikirimkan fullname/profession/email/password
    -  valueForm > nilai yang dikirimkan oleh state values
*/
export const useForm = (initialValue) => {
    const [values, setValue] = useState(initialValue);
    return [values, (formType, formValue) => {
        return setValue({...values, [formType] : formValue})
    }]
}