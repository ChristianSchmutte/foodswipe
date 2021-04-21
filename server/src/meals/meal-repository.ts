import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { Meal } from './entities/meal.entity';

@EntityRepository(Meal)
export class MealRepository extends Repository<Meal> {
  async createMeal(createDto: CreateMealDto): Promise<Meal> {
    const newMeal = new Meal();
    newMeal.name = createDto.name;
    newMeal.description = createDto.description;
    newMeal.price = createDto.price;
    newMeal.image_url = createDto.image_url;

    try {
      await newMeal.save();
      return newMeal;
    } catch (error) {
      // LOGGER
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async getMeals(): Promise<Meal[]> {
    // TODO: query builder
    // Todo Error Handling
    const meals = await Meal.find();

    return meals;
  }

  async getMealById(id: number): Promise<Meal> {
    const meal = await Meal.findOne({ id });

    if (!meal) throw new NotFoundException(`Could not find meal with id:${id}`);

    return meal;
  }
}
