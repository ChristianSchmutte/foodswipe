import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
import { MealRepository } from './meal-repository';
export declare class MealsService {
    private mealRepository;
    constructor(mealRepository: MealRepository);
    create(createMealDto: CreateMealDto): Promise<Meal>;
    getMeals(): Promise<Meal[]>;
    findOne(id: number): Promise<Meal>;
    updateMeal(id: number, updateMealDto: UpdateMealDto): Promise<Meal>;
    deleteMeal(id: number): Promise<void>;
}
