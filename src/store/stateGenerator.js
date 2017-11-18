import forms from '../form_configs'

let state = {}

for(let form in forms) {
   if(forms.hasOwnProperty(form)){
       let obj1 = forms[form]
       let obj2 = {}

       state[form] = obj2

       Object.keys(obj1).map((key) => {
           if(key !== 'meta'){
               obj2[key] = ""
           }
       })
   }
}


export default state