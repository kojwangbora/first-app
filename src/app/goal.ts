export class Goal {
    showDescription:boolean;
    constructor(public id: number, public name: string, public description: string){
        this.showDescription=false;
    }
    // id!: number;
    // name!: string;
    // description!: string;
}
