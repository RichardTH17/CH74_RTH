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

export class Team {
    constructor(name){
      this.name = name;
      this.team = [];
    }

    Add(name)
    {
      this.team.push(name);
    }
    Delete(name)
    {
      const index = this.team.indexOf(name);

      if(index !== -1)
      {
        this.team.splice(index,1);
      }
    }
}

const Equipo = new Team();
Equipo.Add("Ricardo");
Equipo.Add("Carlos");
Equipo.Add("Hector");
Equipo.Add("David");
Equipo.Add("Miguel");
console.log(Equipo.team);
Equipo.Delete("Ricardo");
console.log(Equipo.team);


