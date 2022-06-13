import { Observable, observable } from "rxjs";


export function functionExample(){
  console.log('function called');
  return '1';
  return '2'; //this is dead call
}


export const observableExample = new Observable(observer=>{

  console.log('observable called');

  observer.next('1');
  observer.next('2');
  setTimeout(()=>{
    observer.next(3);
  }, 3000)
})
