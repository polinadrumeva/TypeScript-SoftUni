type City = {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes: () => void;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
  };
  
function cityTaxes(name: string, population: number, treasury: number): City {
    const city: City = {
      name,
      population,
      treasury,
      taxRate: 10,
      
      collectTaxes: function () {
        this.treasury += Math.floor(this.population * this.taxRate);
      },
      
      applyGrowth: function (percentage: number) {
        this.population += Math.floor(this.population * percentage/100);
      },
      
      applyRecession: function (percentage: number) {
        this.treasury -= Math.floor(this.treasury * percentage/100);
      }
    };
  
    return city;
  }

//   const city = 
//   cityTaxes('Tortuga', 7000, 15000);
//   console.log(city);

  const city =
  cityTaxes('Tortuga',
  7000,
  15000);
 city.collectTaxes();
 console.log(city.treasury);
 city.applyGrowth(5);
 console.log(city.population);
 city.applyRecession(5);
 console.log(city.treasury);

