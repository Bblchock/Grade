import { Skills } from "./enums";

export type skillsListType = Record<Skills, (target: CharacterInterface) => void>;

export type CharacterParamsType = {
    name: string;
    maxHealth: number;
    currentHealth: number;
    power: number;
    mana: number;
    skills: skillsListType;
};

export interface CharacterInterface {
    attack(target: CharacterInterface): void;
    heal(amount: number): void;
    takeDamage(amount: number): void;
    isAlive(): boolean;
}
export interface PlayerCharacterInterface extends CharacterInterface {
    useSkill(target: CharacterInterface, skill: string): void;
    param(): object;
}
