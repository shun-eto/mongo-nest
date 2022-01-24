import { Repository } from 'typeorm';
import { Photo } from './photo.entity';
export declare class PhotoService {
    private readonly photoRepository;
    constructor(photoRepository: Repository<Photo>);
    findAll(): Promise<Photo[]>;
}
