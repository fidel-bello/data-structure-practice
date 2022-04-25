class Vector //small implementation of array in javascript
 {
  #array = [null];
  #size = [0];
  #capacity = [];

  constructor(size) {
    this.#size = this.size;
    this.#size = size;

    if (size < 0)
     size = 1;
    this.#capacity = [size * 2];
    this.#array = this.#capacity;
  }

  print1() {
    for (let i = 0; i < this.#size; i++)
    {   
         console.log(this.#array[i]);
    }
  }

  set(idx, value) {
    for (let i = 0; i < this.#size; i++)
     this.#array[idx] = value;
  }

  callback() {
    return;
  }
}

function main() {
  let size = 10;
  let v = new Vector(size);
  for (let i = 0; i < size; i++)
   v.set(i, i);
  v.print1();
}

Vector.prototype.callback();
{
  main();
}
