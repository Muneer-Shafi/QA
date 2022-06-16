export class examData {
    id: number = 0;
    question: string = '';
    option1:string='';
    option2:string='';
    option3:string='';
    option4:string='';

}


export interface questionType{
    id:number|string;
    question:string;
    options:{
        option1:string;
        option2:string;
        option3:string;
        option4:string;
    }
}