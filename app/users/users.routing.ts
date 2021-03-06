import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserFormComponent } from './user-form.component';
import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';

export const usersRouting = RouterModule.forChild([
	{ 
		path: 'users/:id', 
		component: UserFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
	{ 
		path: 'users/new', 
		component: UserFormComponent,
		canDeactivate: [ PreventUnsavedChangesGuard ]  
	},
    { path: 'users', component: UsersComponent },
]);