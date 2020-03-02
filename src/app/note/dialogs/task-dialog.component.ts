import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-task-dialog',
  styleUrls: ['./dialog.scss'],
  template: `
    <h1 mat-dialog-title>Task</h1>
    <div mat-dialog-content class="content">
      <mat-form-field>
        <textarea
          placeholder="Task description"
          matInput
          [(ngModel)]="data.task.description"
        ></textarea>
      </mat-form-field>
      <br />
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data" cdkFocusInitial>
        {{ data.isNew ? 'Add Task' : 'Update Task' }}
      </button>

      <app-delete-button
        (delete)="handleTaskDelete()"
        *ngIf="!data.isNew"
      ></app-delete-button>
    </div>
  `
})
export class TaskDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleTaskDelete() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }
}
