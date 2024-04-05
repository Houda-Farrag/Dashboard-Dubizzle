import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../../Services/Admin/admin.service';

export const authGuard: CanActivateFn = (route, state) => {
  const adminService = inject(AdminService)
  const router = inject(Router)
  let checklogin = adminService.isLoged;
  adminService.checkUserState().subscribe(reselt => checklogin = reselt)
  if (checklogin == true) {
    return true
  } else {
    router.navigate(["signin"])
    alert("you should log in first")
    return false
  }
};
