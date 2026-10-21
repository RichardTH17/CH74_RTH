export class Player {
    constructor(name, level, points) {
      this.name = name;
      this.level = level;
      this.points = points;
    }
    info()
    {
      return `${this.name} has reached Level ${this.level}!` 
    }
    levelUp()
    {
      return `${this.name} has reached Level ${++this.level}!` 
    }
    experienceReached()
    {
        if(this.points >= 5)
        {
          ++this.level;
        }
      return `${this.name} has reached ${this.points} points of experience! and now his level is ${this.level}`;
    }
  }

  const Ricardo = new Player("Ricardo",5,5);
  console.log(`${Ricardo.experienceReached()}`);