import { Vehicule } from "../vehicule/vehicule";

export class Driver {
    constructor(public id: number, 
                public firstName : string,
                public lastName : string,
                public vehicule : Vehicule,
                public photo : string   
        ){}
}
