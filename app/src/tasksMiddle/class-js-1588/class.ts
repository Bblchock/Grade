import { Skills } from "./enums";
import { CharacterInterface, CharacterParamsType, PlayerCharacterInterface, skillsListType } from "./types";

class Character implements CharacterInterface {
    protected name: string;
    protected maxHealth: number;
    protected currentHealth: number;
    protected power: number;
    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.maxHealth = this.currentHealth = health;
        this.power = power;
    }
    attack(target: CharacterInterface): void {
        target.takeDamage(this.power);
    }
    heal(amount: number): void {
        const isReachedLimit = this.currentHealth + amount > this.maxHealth;
        const amountAddition = this.currentHealth + amount;
        this.currentHealth = isReachedLimit ? this.maxHealth : amountAddition;
    }
    takeDamage(amount: number): void {
        this.currentHealth = this.currentHealth - amount < 0 ? 0 : this.currentHealth - amount;
    }
    isAlive(): boolean {
        return this.currentHealth > 0;
    }
}
class PlayerCharacter extends Character implements PlayerCharacterInterface {
    constructor(name: string, health: number, power: number, mana: number, skills: skillsListType) {
        super(name, health, power);
        this.skills = skills;
        this.mana = mana;
    }
    protected skills: skillsListType;
    protected mana: number;
    useSkill(target: CharacterInterface, skill: string): void {
        if (this.mana < 50) {
            console.log("Мало маны");
            return;
        }
        this.mana -= 50;
        this.skills[skill].bind(this)(target);
    }
    param(): CharacterParamsType {
        return {
            name: this.name,
            maxHealth: this.maxHealth,
            currentHealth: this.currentHealth,
            power: this.power,
            mana: this.mana,
            skills: this.skills,
        };
    }
}

const skillsList: skillsListType = {
    [Skills.OneShot](target: CharacterInterface) {
        target.takeDamage(this.power * 5);
    },
    [Skills.Healing](target: CharacterInterface) {
        target.heal(this.power * 3);
    },
};

export const game = (): void => {
    const player = new Character("player", 500, 50);
    const playerTwo = new PlayerCharacter("playerTwo", 300, 60, 200, skillsList);
    const playerThree = new PlayerCharacter("playerThree", 200, 70, 100, skillsList);

    playerTwo.useSkill(player, Skills.OneShot);
    playerThree.useSkill(player, Skills.Healing);
    playerThree.useSkill(playerTwo, Skills.OneShot);
};
