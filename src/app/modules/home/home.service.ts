import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from './home.types';
import { AppTablePaginatorInterface } from '@app/components/table';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private readonly httpClient: HttpClient) {}

  getTasks(paginator: AppTablePaginatorInterface): Observable<{ data: TaskInterface[]; totalItems: number; }> {
    return this.httpClient.get<{ data: TaskInterface[]; totalItems: number; }>(`@api/tasks?pageNumber=${paginator.pageNumber}&pageSize=${paginator.pageSize}`);
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
