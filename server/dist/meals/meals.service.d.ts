import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
import { MealRepository } from './meal-repository';
export declare class MealsService {
    private mealRepository;
    constructor(mealRepository: MealRepository);
    create(createMealDto: CreateMealDto): Promise<Meal>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMealDto: UpdateMealDto): string;
    remove(id: number): string;
}
