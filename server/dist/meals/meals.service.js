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
exports.MealsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const meal_repository_1 = require("./meal-repository");
let MealsService = class MealsService {
    constructor(mealRepository) {
        this.mealRepository = mealRepository;
    }
    create(createMealDto) {
        return this.mealRepository.createMeal(createMealDto);
    }
    findAll() {
        return `This action returns all meals`;
    }
    findOne(id) {
        return `This action returns a #${id} meal`;
    }
    update(id, updateMealDto) {
        return `This action updates a #${id} meal`;
    }
    remove(id) {
        return `This action removes a #${id} meal`;
    }
};
MealsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(meal_repository_1.MealRepository)),
    __metadata("design:paramtypes", [meal_repository_1.MealRepository])
], MealsService);
exports.MealsService = MealsService;
//# sourceMappingURL=meals.service.js.map