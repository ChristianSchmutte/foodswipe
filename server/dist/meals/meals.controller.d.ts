import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
export declare class MealsController {
    private readonly mealsService;
    constructor(mealsService: MealsService);
    create(createMealDto: CreateMealDto): Promise<Meal>;
    findAll(): Promise<Meal[]>;
    findOne(id: number): Promise<Meal>;
    update(id: number, updateMealDto: UpdateMealDto): Promise<Meal>;
    remove(id: number): Promise<void>;
}
