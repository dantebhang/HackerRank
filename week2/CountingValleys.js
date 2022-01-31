function countingValleys(steps, path) {
	let step = 0;
	let valleyCount = 0;

	path.split("").map((el) => {
		if (el === "U") {
			step++;
		}
		if (el === "D") {
			if (step === 0) {
				valleyCount++;
			}
			step--;
		}
	});

	return valleyCount;
}
