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
exports.MealsController = void 0;
const common_1 = require("@nestjs/common");
const meals_service_1 = require("./meals.service");
const create_meal_dto_1 = require("./dto/create-meal.dto");
const update_meal_dto_1 = require("./dto/update-meal.dto");
let MealsController = class MealsController {
    constructor(mealsService) {
        this.mealsService = mealsService;
    }
    create(createMealDto) {
        return this.mealsService.create(createMealDto);
    }
    findAll() {
        return this.mealsService.getMeals();
    }
    findOne(id) {
        return this.mealsService.findOne(id);
    }
    update(id, updateMealDto) {
        return this.mealsService.updateMeal(id, updateMealDto);
    }
    remove(id) {
        return this.mealsService.deleteMeal(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_meal_dto_1.CreateMealDto]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __param(1, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_meal_dto_1.UpdateMealDto]),
    __metadata("design:returntype", Promise)
], MealsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MealsController.prototype, "remove", null);
MealsController = __decorate([
    common_1.Controller('meals'),
    __metadata("design:paramtypes", [meals_service_1.MealsService])
], MealsController);
exports.MealsController = MealsController;
//# sourceMappingURL=meals.controller.js.map