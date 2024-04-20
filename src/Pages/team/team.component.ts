import { Component } from '@angular/core';
import { AdminService } from '../../Services/Admin/admin.service';
import { Admin } from '../../app/Models/admin';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  admins: Admin[] = []
  constructor(private adminServ: AdminService) {
    this.adminServ.getAllAdmin().subscribe((admins) => {
      this.admins = admins
    })
  }
}
