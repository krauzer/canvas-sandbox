class CircularBuffer {

  constructor(length){
    this.buffer = new Int32Array(length);
    this.maxSize = length;
    this.currentSize = 0;
    this.openIndex = 0;
    this.lastFilledIndex = -1;
  }

  get(index){
    return this.buffer[(this.lastFilledIndex+index)%this.maxSize];
  }

  size(){
    return this.currentSize;
  }

  add(el){
    if (this.currentSize< this.maxSize) this.currentSize++;
    this.buffer[this.openIndex] = el;
    this.lastFilledIndex = (this.lastFilledIndex+1)%this.maxSize;
    this.openIndex = (this.lastFilledIndex + 1)%this.maxSize;
  }

  forEach(callback){
    for (let i = 0; i < this.currentSize; i++) {
      callback(this.get(i));
    }
  }

}

module.exports = CircularBuffer;