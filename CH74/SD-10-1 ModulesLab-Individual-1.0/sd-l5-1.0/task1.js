export function costCalculator(costart) {
    const costo = parseInt(costart);
    const costotrans = 3;
    const impuesto = 0.01;
    return costo + costotrans + (costo*impuesto);
}