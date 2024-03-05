import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  TaskInterface,
} from './home.types';
import { HomeService } from './home.service';

import { AppTableInterface, AppTablePaginatorInterface } from '@app/components/table';

import { AuthService } from 'src/app/core/auth/auth.service';
import { forkJoin } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';
import { AppConfirmationConfig } from '@app/services/confirmation';
import { AppConfirmationDialogComponent } from '@app/services/confirmation/dialog/dialog.component';
import { UserJWTInterface } from 'src/app/core/interfaces/interfaces.types';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  public selection = new SelectionModel<number>(true, []);

  public user!: UserJWTInterface;

  public tasks: TaskInterface[] = [];

  public config: AppTableInterface = {
    title: 'Minhas Tarefas',
    selection: true,
    sortable: true,
    headers: [
      { name: 'Nome', key: 'name' },
      { name: 'Descrição', key: 'description' },
      { name: 'Criado em', key: 'createdAt' },
    ],
    content: [
      { type: 'field', key: 'name' },
      { type: 'field', key: 'description' },
      { type: 'timestamp', key: 'createdAt' },
    ],
    paginator: true,
    paginatorConfig: {
      defaultPageSize: 5,
    },
    showMore: true,
  };

  private defaultConfig = (length: number): AppConfirmationConfig => {
    return {
      title: 'Confirmar ação',
      message: `Você tem certeza de que deseja apagar ${length} tarefa(s)? <span class="font-semibold">Essa ação não pode ser desfeita!</span>`,
      icon: {
        show: true,
        name: 'heroicons_outline:exclamation',
        color: 'warn',
      },
      actions: {
        confirm: {
          show: true,
          label: 'Confirmar',
          color: 'primary',
        },
        cancel: {
          show: true,
          label: 'Cancelar',
        },
      },
      dismissible: false,
    };
  };

  public totalItems = 0;

  public paginator: AppTablePaginatorInterface = { pageNumber: 1, pageSize: 5 };

  constructor(
    private readonly authService: AuthService,
    private readonly homeService: HomeService,
    private readonly matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.authService.loggedUser.subscribe((user) => {
      if (user) {
        this.user = { ...user, id: +user.id };
        this.getTasks(this.paginator);
      }
    });
  }

  getTasks(paginator: AppTablePaginatorInterface): void {
    void this.homeService.getTasks(paginator).subscribe((tasks) => {
      this.tasks = tasks.data;
      this.totalItems = tasks.totalItems;
    });
  }

  remove(event: number[]): void {
    const dialog = this.matDialog.open(AppConfirmationDialogComponent, {
      autoFocus: false,
      disableClose: !this.defaultConfig(event.length).dismissible,
      data: this.defaultConfig(event.length),
      panelClass: 'app-confirmation-dialog-panel',
    });

    dialog.afterClosed().subscribe((state: 'cancelled' | 'confirmed') => {
      if (state === 'cancelled') return;
      const obsv = event.map((taskId) => this.homeService.deleteTask(taskId));
      forkJoin(obsv).subscribe(() => {
        this.getTasks(this.paginator);
        this.selection.clear();
      });
    });
  }

  done(event: number[]): void {
    const obsv = event.map((taskId) =>
      this.homeService.updateStatusTask(taskId)
    );
    forkJoin(obsv).subscribe(() => {
      this.getTasks(this.paginator);
      this.selection.clear();
    });
  }

  open(data?: TaskInterface): void {
    const dialog = this.matDialog.open(TaskDialogComponent, {
      panelClass: 'app-confirmation-dialog-panel',
      data,
    });

    dialog.afterClosed().subscribe((task: TaskInterface) => {
      if (!task) return;

      if (task.id) {
        void this.homeService
          .updateTask(task.id, { ...task, userId: this.user.id })
          .subscribe(() => {
            this.getTasks(this.paginator);
          });
      } else {
        void this.homeService
          .createTask({ ...task, userId: this.user.id })
          .subscribe(() => {
            this.getTasks(this.paginator);
          });
      }
    });
  }

  paginated(event: AppTablePaginatorInterface): void {
    this.paginator = event;
    this.getTasks(this.paginator);
  }
}
