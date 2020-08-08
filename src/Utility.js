const letters = "0123456789abcdef";

const colors = [
    "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
    "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
    "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
    "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
    "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
    "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0"
];

class Utility {
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

    static makeId = len => {
        let id = "";
        for (let i = 0; i < len; i++) {
            id += letters[Math.floor(Math.random() * letters.length)]
        }
        return id
    };
}

module.exports = Utility;