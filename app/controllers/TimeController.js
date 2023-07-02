import { setHTML, setText } from "../utils/Writer.js";

function _drawTime() {
  const currentTime = new Date
  // console.log('here is the time', currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  const newTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  // console.log(newTime);
  setHTML('timeDisplay', `
  <p class="fs-2">${newTime}</p>
  `)
}

export class TimeController {

  constructor() {
    // console.log('date controller is up n runnin');
    _drawTime()
  }

}

setInterval(_drawTime, 1000)