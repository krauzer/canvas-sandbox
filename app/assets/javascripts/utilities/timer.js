export default class Timer {
  constructor() {
    this.startTime = 0;
  }

  start(){
    this.startTime = Date.now();
  }

  stop() {
    return Date.now() - this.startTime;
  }
}