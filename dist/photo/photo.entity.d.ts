import { ObjectID } from 'typeorm';
export declare class Photo {
    id: ObjectID;
    name: string;
    description: string;
    filename: string;
    isPublished: boolean;
}
