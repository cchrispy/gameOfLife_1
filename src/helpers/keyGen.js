const keyGen = () => {
  var x = Math.floor(Math.random() * 54) + 4; // random number from 4 to 56
  var y = Math.floor(Math.random() * 54) + 3;

  return x + (y * 60);

}

export default keyGen;