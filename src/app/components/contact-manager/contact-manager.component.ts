import { Component ,OnInit} from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent  implements OnInit {
  private contactsList:[]=[];
  constructor( private contactService: ContactService){
  }

  ngOnInit(): void {
    this.loadContact();
    this.loadGroups();
  }
  loadContact(){
    this.contactService.getAllContacts().subscribe((res)=>{
      console.log(res);
      this.contactsList= res;
      console.log(this.contactsList);
    })
  }

  loadGroups(){
    this.contactService.getAllGroups().subscribe((res)=>{
      console.log(res, "###Groups");
    }
    )}
}
