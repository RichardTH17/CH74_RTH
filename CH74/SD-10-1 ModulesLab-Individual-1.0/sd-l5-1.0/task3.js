export function ageCalculator(y,m,d) {
    let today = new Date();
    let birthday = new Date(y, m, d);
    let age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if (theMonth < 0x0 || 0x0 === theMonth && today.getDate() < birthday.getDate()) {
        age--;
    }
    return age;
}
