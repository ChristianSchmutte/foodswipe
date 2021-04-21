import { Repository } from 'typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
export declare class MealRepository extends Repository<Meal> {
    createMeal(createDto: CreateMealDto): Promise<Meal>;
    getMeals(): Promise<Meal[]>;
    getMealById(id: number): Promise<Meal>;
    updateMeal(id: number, updateMealDto: UpdateMealDto): Promise<Meal>;
}
