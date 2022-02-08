import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTaskDetail, GetTaskDetail } from '../shared/models/AddTaskDetailVm';
import * as glob from '../shared/glob'
import { MatTableDataSource } from '@angular/material/table';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'text/json',
    'responseType':'text' as 'json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AddTaskDetailService {

  formData: AddTaskDetail= new AddTaskDetail();
  readonly baseURL = glob.rootUrl+'User/addTask';//
  list : AddTaskDetail[] | undefined;
  datasource:any;
  constructor(private http: HttpClient) { }

  // postAddCompliantDetail() {
  //   return this.http.post(`${this.baseURL}`,this.formData,httpOptions);

  //     }
  postAddTaskDetail() {
    return this.http.post(`${this.baseURL}?status=${this.formData.TaskStatus}`,this.formData,httpOptions);
  }

  formData1:GetTaskDetail=new GetTaskDetail();
readonly baseURL1= glob.rootUrl+'user/getTasks';
list1:GetTaskDetail[] | undefined;

  refreshList() {
    this.http.get(this.baseURL1,httpOptions)
      .subscribe(resul=>
        this.list1 = resul as GetTaskDetail[])
        this.datasource=new MatTableDataSource(this.list1);
       return this.list1
  }
  
}