class Sorter {
  constructor() {
    this.sort_arr = [];
    this.compare_func = function (left, right) {
      return left - right;
    }
  }

  add(element) {
    this.sort_arr.push(element);
  }

  at(index) {
    if(index >= this.sort_arr.length){
      return -1;
    }

    return this.sort_arr[index];
  }

  get length() {
    return this.sort_arr.length;
  }

  toArray() {
    return this.sort_arr;
  }

  sort(indices) {
      indices.sort((a, b) => a - b);
      let temp_arr = [];

      for(let i = 0; i < indices.length; i++){
        temp_arr.push(this.sort_arr[indices[i]]);
      }

      temp_arr.sort(this.compare_func);

      for(let i = 0; i < indices.length; i++){
          this.sort_arr[indices[i]] = temp_arr[i];
      }

      return this.sort_arr;
  }

  setComparator(compareFunction) {
    this.compare_func = compareFunction;
  }
}

module.exports = Sorter;
