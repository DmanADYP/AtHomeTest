import { Component, OnInit } from "@angular/core";
import { User } from "app/model/report.model";
import { FormControl,Validators,FormGroup } from "@angular/forms";
import { HttpService } from "app/Service/http.service";

@Component({
    selector:'my-login',
    template:`
      <form (ngSubmit)="submitBE()">
            <div class="form-group">
                
                <br />
                <!--new code-->
                
                <label for="status">Project DESC</label>
                <textarea class="form-control" rows="3" placeholder="projectdesc" [(ngModel)]="model.id" name="projectdesc"></textarea>
                <label for="status">PO Number</label>
                <textarea class="form-control" rows="3" placeholder="ponumber" [(ngModel)]="model.author" name="ponumber"></textarea>
                <label for="status">PO Expiration</label>
                <textarea class="form-control" rows="3" placeholder="poExpiration" [(ngModel)]="model.title" name="poExpiration"></textarea>
              

                <br />
                <button *ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
                <button *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>

    `,
    providers:[HttpService]
         

})export class LoginComponent implements OnInit{
   public  model= new User('');
   user: FormGroup;
  constructor(private service: HttpService) {
    this.service.getQuote().subscribe(
        x=> {this.model = x,
        alert(this.model.id);}
    );
  }
  
  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }

}