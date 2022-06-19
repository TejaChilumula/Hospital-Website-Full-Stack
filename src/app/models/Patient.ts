
import { Doctor } from "./Doctor";

export class Patient
{
  id : number;
  name? : string;
  city? : string;
  illness? : string;
}
export class Patients
{
  id : number;
  name? : string;
  city? : string;
  illness? : string;
  doctor? : Doctor;
  n? : string;

}
