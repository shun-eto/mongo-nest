"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetsController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pet_entity_1 = require("./pet.entity");
let PetsController = class PetsController {
    constructor(petsRepository) {
        this.petsRepository = petsRepository;
    }
    async getPets() {
        console.log('getPets');
        const pets = await this.petsRepository.find();
        pets[0].testMethod();
        return await this.petsRepository.find();
    }
    async getPet(id) {
        const pet = await this.petsRepository.findOne({ name: 'Garfield' });
        if (!pet) {
            throw new common_1.NotFoundException();
        }
        pet.testMethod();
        return pet;
    }
    async createPet(pet) {
        if (!pet || !pet.name || !pet.animalType) {
            throw new common_1.BadRequestException(`A pet must have at least name and animalType defined`);
        }
        return await this.petsRepository.save(new pet_entity_1.Pet(pet));
    }
    async updatePet(id, pet) {
        const exists = typeorm_2.ObjectID.isValid(id) && (await this.petsRepository.findOne(id));
        if (!exists) {
            throw new common_1.NotFoundException();
        }
        await this.petsRepository.update(id, pet);
    }
    async deletePet(id) {
        const exists = typeorm_2.ObjectID.isValid(id) && (await this.petsRepository.findOne(id));
        if (!exists) {
            throw new common_1.NotFoundException();
        }
        await this.petsRepository.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getPets", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "getPet", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "createPet", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "updatePet", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetsController.prototype, "deletePet", null);
PetsController = __decorate([
    (0, common_1.Controller)('pets'),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.MongoRepository])
], PetsController);
exports.PetsController = PetsController;
//# sourceMappingURL=pets.controller.js.map