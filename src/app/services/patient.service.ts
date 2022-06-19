import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  fetchsinglepatient(pid: number) : Observable<Patient>{
    return this.http.get<Patient>(this.getApi+'/'+pid);
  }

  pid$ = new BehaviorSubject<number>(0);

  did : number;


  getApi = 'http://localhost:2222/patient';
  postApi = 'http://localhost:2222/patient';
  deleteApi = 'http://localhost:2222/patient';
  getDoctorApi = 'http://localhost:2222/doctor';
  getDocByIdApi = 'http://localhost:2222/doctor';
  putApi = 'http://localhost:2222/patient';

  constructor(private http : HttpClient) { }

  public getpatient(page : number , size : number) : Observable<Patient[]>{
    return this.http.get<Patient[]>(this.getApi+'?page='+page+'&size='+size);
  }
  public postpatient(patient : Patient) : Observable<any>{
    return this.http.post<any>(this.postApi +'/'+this.did, patient);
  }
  public getdoctor() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.getDoctorApi);
  }
  public deletepatient(id? : number) : Observable<any>{
    return this.http.delete<any>(this.getApi+'/'+id);
  }

}
