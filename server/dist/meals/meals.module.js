"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealsModule = void 0;
const common_1 = require("@nestjs/common");
const meals_service_1 = require("./meals.service");
const meals_controller_1 = require("./meals.controller");
const typeorm_1 = require("@nestjs/typeorm");
const meal_entity_1 = require("./entities/meal.entity");
const meal_repository_1 = require("./meal-repository");
let MealsModule = class MealsModule {
};
MealsModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([meal_entity_1.Meal])],
        controllers: [meals_controller_1.MealsController],
        providers: [meals_service_1.MealsService, meal_repository_1.MealRepository],
    })
], MealsModule);
exports.MealsModule = MealsModule;
//# sourceMappingURL=meals.module.js.map