import { BaseEntity } from 'typeorm';
export declare class Restaurant extends BaseEntity {
    id: number;
    email: string;
    name: string;
    password: string;
    latitude: number;
    longitude: number;
}
