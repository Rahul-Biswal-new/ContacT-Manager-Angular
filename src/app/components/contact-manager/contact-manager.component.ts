import { Component ,OnInit} from '@angular/core';
import { Icontact } from 'src/app/models/Icontacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent  implements OnInit {
  public contactsList:Icontact[]=[];
  public loading:boolean = false;
  constructor( private contactService: ContactService){
  }

  ngOnInit(): void {
    this.loading = true;
    this.loadContact();
    // this.loadGroups();
    // this.getSingleGroup();
  }
  loadContact(){
    this.contactService.getAllContacts().subscribe(
      (res)=>{
      console.log(res);
      this.contactsList= res;
      this.loading = false;
      console.log(this.contactsList);
    },)
  }

  // loadGroups(){
  //   this.contactService.getAllGroups().subscribe((res)=>{
  //     console.log(res, "###Groups");
  //   })
  // }

  // getSingleGroup(contact:Icontact){
  //   this.contactService.getSingleGroups(contact).subscribe((res)=>{
  //     console.log(res, "###getSingleGroups");
  //   })
  // }
}
