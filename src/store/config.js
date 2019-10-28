
export default {
  red: {
    name: "red",
    color: "red",
    timeout: 10000,
    nextColor: "yellow",
  },
  yellow: {
    name: "yellow",
    color: "yellow",
    timeout: 3000,
    nextColor: "green",
  },
  yellowToRed: {
    name: "yellowToRed",
    color: "yellow",
    timeout: 3000,
    nextColor: "red",
  },
 green: {
    name: "green",
    color: "green",
    timeout: 15000,
    nextColor: "yellowToRed",
  }
};