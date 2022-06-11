import { Observable, Observer } from "rxjs";

export class observableClass implements Observer<number>{

next(data:number){
  console.log('object from observable class'+ data)
}
error(error:string){
  console.log(error)
}
complete(){
  console.log("complete (object from observable class)")
}

}
