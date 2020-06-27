exports.printMe =  (msg, color) => {
    console.log(`${colorTextLog(msg, color)}!`);
}

 colorTextLog = (text, color) => { return `\x1b[${color}m${text}\x1b[0m`; }
