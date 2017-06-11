export class BE {
        public id: string;
        public author: string;
        public text:string;
        public user: string; 
        public password: string;
        public lob:string;
        public region:string;
        public serviceLine: string;
        public sow:string;
        public sfdcid:string;
        public projectdesc: string; 
        public ponumber:string[];
        public poExpiration:string;
        public projectManager:string;
        public status:string;
    
    constructor(obj?:any){
    
     this.id =  obj && obj.id || null;
     this.lob =  obj && obj.lob ||null;
     this.password =  obj && obj.password ||null;
     this.poExpiration =  obj && obj.poExpiration || null;
     this.poExpiration =  obj && obj.poExpiration || null;
     this.ponumber =  obj && obj.ponumber ||null;
     this.projectdesc =  obj && obj.projectdesc || null;
     this.projectManager =  obj && obj.projectManager ||null;
     this.region =  obj && obj.region ||null;
     this.serviceLine =  obj && obj.serviceLine ||null;
     this.sfdcid =  obj && obj.sfdcid ||null;
     this.sow =  obj && obj.sow ||null;
     this.status =  obj && obj.status ||null;
     this.text =  obj && obj.text ||null;
     this.user =  obj && obj.user ||null;
      this.author =  obj && obj.author || null;
    
        }
}