import { BaseEntity } from 'typeorm';
export declare class Meal extends BaseEntity {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
}
