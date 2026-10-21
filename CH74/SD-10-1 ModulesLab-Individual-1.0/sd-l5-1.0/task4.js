

export class FriendAge {
    constructor(name, year, month, day)
    {
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge()
    {
    let today = new Date();
    let birthday = new Date(this.year, this.month, this.day);
    var age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if (theMonth < 0x0 || 0x0 === theMonth && today.getDate() < birthday.getDate()) {
        age--;
    }
    return `${this.name} is ${age} today!`;
    }
}