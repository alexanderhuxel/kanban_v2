import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BoardComponent } from './components/board/board.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'help', component: HelpComponent },
  { path: 'addtask', component: AddTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
