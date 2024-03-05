import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from './home.types';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private readonly httpClient: HttpClient) {}

  getTasks(): Observable<TaskInterface[]> {
    return this.httpClient.get<TaskInterface[]>('@api/tasks');
  }

  createTask(task: TaskInterface): Observable<TaskInterface[]> {
    return this.httpClient.post<TaskInterface[]>('@api/tasks', task);
  }

  updateTask(taskId: number, task: TaskInterface): Observable<boolean> {
    return this.httpClient.put<boolean>(`@api/tasks/${taskId}`, task);
  }

  updateStatusTask(taskId: number): Observable<TaskInterface> {
    return this.httpClient.post<TaskInterface>(`@api/tasks/${taskId}/status`, {});
  }

  deleteTask(taskId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`@api/tasks/${taskId}`)
  }
}
