exports.printMe =  (color) => {
    if (!color) color = '#ffeeee';
    console.log('%c Oh my heavens! ', ' color: [color]');
}