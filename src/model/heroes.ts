export interface Hero {
  id: number;
  name: string;
}

class Heroes {
  heroes: Hero[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr. IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' },
  ];

  async getHeroes(): Promise<Hero[]> {
    return this.heroes;
  }
  async getHero(id: number): Promise<Hero | undefined> {
    return this.heroes.find((hero) => hero.id === id);
  }

  async findHeroes(query: string): Promise<Hero[]> {
    return this.heroes.filter((hero) =>
      hero.name.toLowerCase().match(query.toLowerCase())
    );
  }

  async addHero(name: string): Promise<Hero[]> {
    const last = this.heroes.at(-1);
    this.heroes.push({ id: (last?.id || 0) + 1, name });
    return this.heroes;
  }

  async updateHero(id: number, name: string): Promise<Hero> {
    const index = this.heroes.findIndex((hero) => hero.id === id);
    const hero = this.heroes[index];
    this.heroes[index] = { ...hero, name };
    return this.heroes[index];
  }

  async deleteHero(id: number): Promise<Hero[]> {
    const index = this.heroes.findIndex((hero) => hero.id === id);
    this.heroes.splice(index, 1);
    return this.heroes;
  }
}
export default new Heroes();
