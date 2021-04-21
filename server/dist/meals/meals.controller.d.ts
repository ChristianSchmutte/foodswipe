import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
export declare class MealsController {
    private readonly mealsService;
    constructor(mealsService: MealsService);
    create(createMealDto: CreateMealDto): Promise<import("./entities/meal.entity").Meal>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMealDto: UpdateMealDto): string;
    remove(id: string): string;
}
