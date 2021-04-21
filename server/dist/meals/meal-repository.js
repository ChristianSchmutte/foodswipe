"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const meal_entity_1 = require("./entities/meal.entity");
let MealRepository = class MealRepository extends typeorm_1.Repository {
    async createMeal(createDto) {
        const newMeal = new meal_entity_1.Meal();
        newMeal.name = createDto.name;
        newMeal.description = createDto.description;
        newMeal.price = createDto.price;
        newMeal.image_url = createDto.image_url;
        try {
            await newMeal.save();
            return newMeal;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
    async getMeals() {
        const meals = await meal_entity_1.Meal.find();
        return meals;
    }
    async getMealById(id) {
        const meal = await meal_entity_1.Meal.findOne({ id });
        if (!meal)
            throw new common_1.NotFoundException(`Could not find meal with id:${id}`);
        return meal;
    }
    async updateMeal(id, updateMealDto) {
        const updatedMeal = await meal_entity_1.Meal.findOne({ id });
        if (!updatedMeal)
            throw new common_1.NotFoundException();
        updatedMeal.name = updateMealDto.name
            ? updateMealDto.name
            : updatedMeal.name;
        updatedMeal.description = updateMealDto.description
            ? updateMealDto.description
            : updatedMeal.description;
        updatedMeal.price = updateMealDto.price
            ? updateMealDto.price
            : updatedMeal.price;
        updatedMeal.image_url = updateMealDto.image_url
            ? updateMealDto.image_url
            : updatedMeal.image_url;
        try {
            await updatedMeal.save();
            return updatedMeal;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Internal Server Error');
        }
    }
};
MealRepository = __decorate([
    typeorm_1.EntityRepository(meal_entity_1.Meal)
], MealRepository);
exports.MealRepository = MealRepository;
//# sourceMappingURL=meal-repository.js.map