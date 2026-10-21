export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
    info()
    {
      return `${this.name} has reached Level ${this.level}!` 
    }
    levelUp()
    {
      return `${this.name} has reached Level ${++this.level}!` 
    }
    
  }

  const Ricardo = new Player("Ricardo",5);
  console.log(`${Ricardo}`);