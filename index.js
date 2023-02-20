import { DateTime } from './modules/luxon.js';
import newBook from './modules/newBook.js';
import singlePageApp from './modules/singlePageFunction.js';

// Date & Time Display function
const refreshTime = () => {
    const timeDisplay = document.getElementById('date');
    const currentDate = DateTime.now();
    const dateString = currentDate.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
    timeDisplay.textContent = dateString;
    setInterval(refreshTime, 1000);
};
  
newBook();
refreshTime();
singlePageApp();