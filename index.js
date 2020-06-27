exports.printMe =  (color) => {
    console.log(`Hi, I'm ${colorTextLog('cyan color', color)}!`);
}

 colorTextLog = (text, color) => { return `\x1b[${color}m${text}\x1b[0m`; }
