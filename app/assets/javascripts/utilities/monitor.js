'use strict';

let Timer = require("./timer.js");
let CircularBuffer = require("./circular_buffer.js");


class Monitor {

  constructor(){
    this.buffer = new CircularBuffer(20);
    this.fps = 0.0;
    this.timer = new Timer();
  }

  newFrame() {
    this.buffer.add(this.timer.stop());
    let bufferSize = this.buffer.size();
    let sum = 0;
    this.buffer.forEach((val) => {sum += val});
    this.fps = (bufferSize / sum) * 1000

    this.timer.start();
  }

  log(){
    return this.fps.toFixed(2);
  }

}




module.exports = Monitor;