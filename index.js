function produceDrivingRange(blockRange) {
  return function(beginning, end){
    beginning = beginning.slice(0, -2);
    end = end.slice(0, -2);

		const blocks = beginning > end ? beginning - end : end - beginning;
    const diff = blockRange - blocks;
		return diff >= 0 ? `within range by ${blockRange - blocks}` : `${blocks - blockRange} blocks out of range`;
	}
}

function produceTipCalculator(amount) {
  return function(tipAmount) {
    return (amount * tipAmount);
  }
}
