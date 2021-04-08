export default function padNumber(number: number | string) {
    number = number.toString();

    while (number.length < 4) {
        number = "0" + number;
    }

    return number;
}