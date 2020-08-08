export default class Utility {
    static objIsEmpty (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    static roundByDecimal (num, decPlaces) {
        const factor = Math.pow(10, decPlaces);
        return Math.round((Number(num) + Number.EPSILON) * factor) / factor
    }

    static capitalize (str) {
        let newStr = str[0].toUpperCase();
        return newStr + str.slice(1)
    }

    static getInitials(firstName, lastName) {
        let initials = firstName ? firstName[0] : "";
        initials += lastName ? lastName[0].slice(-1) : "";
        initials = initials.toUpperCase();
        return initials;
    }

    static parseName(fullName) {
        const names = fullName.split(" ");
        const lastName = names.pop();
        const firstName = names.join(" ");
        return {
            firstName,
            lastName
        }
    }

}