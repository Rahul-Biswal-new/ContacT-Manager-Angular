import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icontact } from 'src/app/models/Icontacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public contactId: string | null = "";
  public singleContact: Icontact={} as Icontact;
  public loading: boolean = false;
  constructor( private contactService: ContactService, private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.getSingleContact();
  }

  getSingleContact(){
    this.activatedRoute.paramMap.subscribe((param)=>{
      console.log(param, "##contactId");
      this.contactId = param.get("contactid");
      console.log(this.contactId, "##contactId");

      this.loading = true;
      this.contactService.getSingleContact(this.contactId).subscribe((res)=>{
        console.log(res,"single contact");
        this.loading = false;
        this.singleContact=res;
        console.log(this.singleContact, "single contact");
      })
    })
  }
}
