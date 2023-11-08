class CompareElements<T> {
    public array : T[];

   
    constructor(array : T[]) {
        this.array = array;
    }

    compare(element : T) {
        let num : number = 0;

      this.array.forEach(el => {
        if (el === element) {
            num++;
        }        
      });
        return `${num}`;
    }

}

let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('b'));

