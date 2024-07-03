/**
 * Generates a circular mask by calculating the coordinates of points on the
 * circumference of a circle.
 * 
 * Example usage:
 * ```typescript
 * const center = {x: 5, y: 5};
 * const radius = 5;
 * const mask = generateCircularMask(center.x, center.y, radius);
 * console.log(mask);
 * ```
 * 
 * @param {number} cx - The x-coordinate of the center of the circle.
 * @param {number} cy - The y-coordinate of the center of the circle.
 * @param {number} radius - The radius of the circle.
 * @param {number} [numPoints] - The number of points to generate on the 
 *  circumference of the circle. Defaults to a calculated value based on the
 *  radius.
 *
 * @returns {{x: number, y: number}[]} An array of objects representing the
 *  coordinates of the points on the circumference of the circle.
 */
export function generateCircularMask(
    cx: number, cy: number, radius: number, numPoints?: number,
): {x: number, y: number}[] {
    if (radius <= 0) {
        throw new Error('Radius must be greater than zero.');
    }
    if (numPoints !== undefined && numPoints < 3) {
        throw new Error('Number of points must be at least 3.');
    }
    const numPointsInternal = numPoints !== undefined ? numPoints : Math.floor(2 * Math.PI * radius);
    const angleStep = (2 * Math.PI) / numPointsInternal;
    return Array.from({ length: numPointsInternal }, (_, i) => { 
        const angle = i * angleStep;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        return {x, y};
    });
}
