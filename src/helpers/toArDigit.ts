export const toArDigit = (input: string) => {
    return input.replace(/[0-9]/g, function (a) {
        return String.fromCharCode(a.charCodeAt(0) + 0x0630);
    });
};
