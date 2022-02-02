function flippingMatrix(matrix) {
	let l = matrix.length - 1;
	let result = 0;
	for (let i = 0; i < matrix.length / 2; i++) {
		for (let j = 0; j < matrix.length / 2; j++) {
			result += Math.max(
				matrix[i][j],
				matrix[i][l - j],
				matrix[l - i][j],
				matrix[l - i][l - j],
			);
		}
	}
	return result;
}
