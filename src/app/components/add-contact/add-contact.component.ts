import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from 'src/app/models/Icontacts';
import { Igroup } from 'src/app/models/Igroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent  implements OnInit {
  groups : Igroup[] = [];
  public contact : Icontact = {} as Icontact; ;
  constructor(private contactService : ContactService,
    private router: Router){}

  // this.contact={groupId:2};

  ngOnInit(): void {
    this.getAllGroupName();
  }

  getAllGroupName() {
    this.contactService.getAllGroups().subscribe((res:any)=>{
      this.groups = res;
      console.log(this.groups, "###groupName");
    })
  }

  createSubmit(){
    this.contactService.createContact(this.contact).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/']);
    }, (err)=>{
      alert(err);
      this.router.navigate(['/contacts/add']);
    })
  }

}
