export function getDate() {
    const today = new Date();
    const year = today.getFullYear();

    let month = today.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }

    let day = today.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    
    let hours = today.getHours();
    if (hours < 10) {
        hours = '0' + hours;
    }

    let minutes = today.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    let seconds = today.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}