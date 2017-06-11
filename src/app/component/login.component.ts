import { Component, OnInit } from "@angular/core";
import { User } from "app/model/report.model";
import { FormControl,Validators,FormGroup } from "@angular/forms";
import { HttpService } from "app/Service/http.service";
import { BE } from "app/model/BE.model";

@Component({
    selector:'my-login',
    template:`

      <form (ngSubmit)="submitBE()" >
            <div class="form-group" *ngFor="let model of models;">
                
                <br />
                <!--new code-->
                
                <label for="status">Project DESC</label>
                <textarea class="form-control" rows="3" placeholder="projectdesc" [(ngModel)]="model.id" name="projectdesc"></textarea>
                <label for="status">PO Number</label>
                <textarea class="form-control" rows="3" placeholder="ponumber" [(ngModel)]="model.author" name="ponumber"></textarea>
                <label for="status">PO Expiration</label>
                <textarea class="form-control" rows="3" placeholder="poExpiration" [(ngModel)]="model.title" name="poExpiration"></textarea>
              

                <br />
                <button (click)="Submit()"*ngIf="!editing" type="submit" class="btn btn-primary btn-block">Add</button>
                <button (click) ="Update()" *ngIf="editing" type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>

    `,
    providers:[HttpService]
         

})export class LoginComponent implements OnInit{
   public  models:BE[];
   user: FormGroup;
   private editing= false;
  constructor(private service: HttpService) {
    this.service.getOneBE('2').subscribe(
        x=> {this.models = x,
        console.log(this.models);
    
}
    );
   
  }
  Submit(){
 this.service.addBE(this.models[0]).subscribe();
  }
  Update(){
      this.service.updateBE(this.models[0],'2').subscribe(result=> {})
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