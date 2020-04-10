import { User } from './user';
import { Training } from './training';
import { TrainerRate } from './TrainerRate';

export class Trainer extends User{
    cv:File;
   trainings : Array<Training> = new Array<Training>();
    rates:Array<TrainerRate> = new Array<TrainerRate>();
}