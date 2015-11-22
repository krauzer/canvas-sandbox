'use strict';

export function requestAnimationFrame(callback, element){

            let requestAnimationFrame =
                window.requestAnimationFrame        ||
                window.webkitRequestAnimationFrame  ||
                window.mozRequestAnimationFrame     ||
                window.oRequestAnimationFrame       ||
                window.msRequestAnimationFrame      ||
                function(callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function() {
                        callback(currTime + timeToCall);
                    }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            return requestAnimationFrame.call(window, callback, element);
        }

export function watchCanvas(statsId, monitor) {
          monitor.newFrame();
          const stats = document.getElementById(statsId),
              context = stats.getContext('2d');
          context.font = '12px serif';
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.fillText(monitor.log() + ' FPS', 25, 25);
        }