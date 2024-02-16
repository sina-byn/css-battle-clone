import { promisify } from 'util';
import getPixels from 'get-pixels';

const readPixels = async (imagePath: string) => {
  const res = await promisify(getPixels)(imagePath, 'image/png');
  return res.data;
};

const meanSquaredError = (a: Uint8Array, b: Uint8Array) => {
  const maxPossibleError = 255 ** 2;
  let error = 0;

  for (let i = 0; i < a.length; i++) {
    error += Math.pow(b[i] - a[i], 2);
  }

  error = error / a.length;
  const errorPercent = (1 - error / maxPossibleError) * 100;

  return parseFloat(errorPercent.toFixed(2));
};

export { meanSquaredError, readPixels };
