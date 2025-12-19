export class Activity{
    id: number = 0;
    name: string;
    type: string;
    programme: string;
    subject: string;
    dateline: string;

    constructor(id?: number, name?: string, type?: string, programme?: string, subject?: string, dateline?: string){
        if(id && name && type && programme && subject && dateline){
            this.id = id;
            this.name = name;
            this.type = type;
            this.programme = programme;
            this.subject = subject;
            this.dateline = dateline;

        }else{
            this.id = 0;
            this.name = "";
            this.type = "";
            this.programme = "";
            this.subject = "";
            this.dateline = "";
        }
    }
}