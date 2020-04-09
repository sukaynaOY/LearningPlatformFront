import { NumberValueAccessor } from '@angular/forms';
import { PlotMomentumAccessibilityKeyboardNavigationOptions } from 'highcharts';
import * as moment from 'moment';
import { Training } from './training';

export class Element {
    id : number
	
	subject : string;
	
	price : number = 0;
	
	duration : number;
	
	startingDate : Date;

	training : Training;
}
