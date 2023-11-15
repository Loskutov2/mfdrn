import {refs} from './HTMLelements'
import {form} from "./form.js"

export const animations={
    clear(){
        refs.container.innerHTML=''
    },
    addForm(){
        refs.container.innerHTML=''
        refs.container.insertAdjacentHTML('beforeend', form)
    }
}
