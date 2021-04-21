import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { Meal } from './entities/meal.entity';
import { MealRepository } from './meal-repository';

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(MealRepository)
    private mealRepository: MealRepository,
  ) {}

  create(createMealDto: CreateMealDto): Promise<Meal> {
    return this.mealRepository.createMeal(createMealDto);
  }

  getMeals(): Promise<Meal[]> {
    return this.mealRepository.getMeals();
  }

  findOne(id: number): Promise<Meal> {
    return this.mealRepository.getMealById(id);
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
