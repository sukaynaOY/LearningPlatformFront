import * as moment from 'moment';
import { User } from './user';
import { Element } from './element';
export class Training {

    id : number; 
	
	name : string;
	
	description : string;
	
	hostInstitution : string;
	
	maxNumber:number;
	
    minNumber:number;

    hours:number;
    
    price:number; 
	
	startingDate : moment.Moment
	
    endingDate : moment.Moment

	isConfirmed : boolean;
	
    trainer : User;

    elements : Array<Element>


}
