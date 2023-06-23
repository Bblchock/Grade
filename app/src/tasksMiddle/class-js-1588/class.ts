class Character {
    name: string;
    maxHealth: number;
    currentHealth: number;
    power: number;
    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.maxHealth = this.currentHealth = health;
        this.power = power;
    }
    attack(target: Character): void {
        target.takeDamage(this.power);
    }
    heal(amount: number): void {
        this.currentHealth =
            this.currentHealth + amount > this.maxHealth ? this.maxHealth : this.currentHealth + amount;
    }
    takeDamage(amount: number): void {
        this.currentHealth = this.currentHealth - amount < 0 ? 0 : this.currentHealth - amount;
    }
    isAlive(): boolean {
        return this.currentHealth > 0;
    }
}

class PlayerCharacter extends Character {
    constructor(name: string, health: number, power: number, mana: number, skills: object) {
        super(name, health, power);
        this.skills = skills;
        this.mana = mana;
    }
    skills: object;
    mana: number;
    useSkill(target: Character, skill: string): void {
        if (this.mana < 50) {
            console.log("Мало маны");
            return;
        }
        this.mana -= 50;
        this.skills[skill].bind(this)(target);
    }
    param(): object {
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

const skillsList = {
    oneShot(target: Character) {
        target.takeDamage(this.power * 5);
        // console.log(this.name + " use oneShot on " + target.name);
        // console.log(target.currentHealth, target.name + " хп");
        // console.log(this.mana, this.name + " mana");
    },
    healing(target: Character) {
        target.heal(this.power * 3);
        // console.log(this.name + " use healing on " + target.name);
        // console.log(target.currentHealth, target.name + " хп");
        // console.log(this.mana, this.name + " mana");
    },
};

export const game = () => {
    const player = new Character("player", 500, 50);
    const playerTwo = new PlayerCharacter("playerTwo", 300, 60, 200, skillsList);
    const playerThree = new PlayerCharacter("playerThree", 200, 70, 100, skillsList);

    // console.log(player.currentHealth, player.name + " хп");
    // console.log(playerTwo.mana, playerTwo.name + " mana");
    // console.log(playerThree.mana, playerThree.name + " mana");

    playerTwo.useSkill(player, "oneShot");
    playerThree.useSkill(player, "healing");
    playerThree.useSkill(playerTwo, "oneShot");
};
