import { ObjectID } from 'typeorm';
export declare class Pet {
    _id: ObjectID;
    name: string;
    animalType: string;
    pictureUrl?: string;
    birthDate?: Date;
    constructor(pet?: Partial<Pet>);
    testMethod(): void;
}
