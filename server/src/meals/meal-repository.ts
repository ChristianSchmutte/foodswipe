import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
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
    // TODO: Error Handling
    const meals = await Meal.find();

    return meals;
  }

  async getMealById(id: number): Promise<Meal> {
    const meal = await Meal.findOne({ id });

    if (!meal) throw new NotFoundException(`Could not find meal with id:${id}`);

    return meal;
  }

  async updateMeal(id: number, updateMealDto: UpdateMealDto): Promise<Meal> {
    const updatedMeal = await Meal.findOne({ id });

    if (!updatedMeal) throw new NotFoundException();

    // TODO: Loop over keys for DRY
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
    } catch (error) {
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}
