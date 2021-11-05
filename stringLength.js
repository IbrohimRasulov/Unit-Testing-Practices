function stringLength(str) {
  if (str.length > 0 && str.length < 10) {
    return str.length;
  } else {
    throw new Error('Check fail: str length < 1 or > 10')
  }
}

module.exports = stringLength;