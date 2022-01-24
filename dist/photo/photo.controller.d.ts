import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
export declare class PhotoController {
    private readonly photoService;
    constructor(photoService: PhotoService);
    findAll(): Promise<Photo[]>;
}
