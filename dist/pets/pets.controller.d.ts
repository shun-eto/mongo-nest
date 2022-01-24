import { MongoRepository } from 'typeorm';
import { Pet } from './pet.entity';
export declare class PetsController {
    private readonly petsRepository;
    constructor(petsRepository: MongoRepository<Pet>);
    getPets(): Promise<Pet[]>;
    getPet(id: any): Promise<Pet>;
    createPet(pet: Partial<Pet>): Promise<Pet>;
    updatePet(id: any, pet: Partial<Pet>): Promise<void>;
    deletePet(id: any): Promise<void>;
}
