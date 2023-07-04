import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icontact } from 'src/app/models/Icontacts';
import { Igroup } from 'src/app/models/Igroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public contact: Icontact={} as Icontact;
  public loading: boolean = false;
  public contactId: string | null = "";
  public groups :Igroup[] = [] as Igroup[];


  constructor(private activatedRoute: ActivatedRoute, private contactService: ContactService, private router : Router) {}

  ngOnInit(): void {
    this.getSingleContact();
    this.getAllGroupName();
  }

  getSingleContact(){
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.contactId = param.get('contactid');
      console.log(this.contactId, "contactId");
    });

    this.contactService.getSingleContact(this.contactId).subscribe((res)=>{
      this.contact = res;
      console.log(this.contact, "###contact");
    })
  }

  getAllGroupName() {
    this.contactService.getAllGroups().subscribe((res:any)=>{
      this.groups = res;
      console.log(this.groups, "###groupName");
    })
  }


  submitUpdate(){
    this.contactService.updateContact(this.contact, this.contactId).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/']); 
    }, (err)=>{
      alert(err);
      this.router.navigate([`/contacts/edit${this.contactId}`]);
    })
  }
}
