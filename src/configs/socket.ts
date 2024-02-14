import { Server } from "socket.io";
import env from "../constants/environment";

let io: Server = new Server();

export const initializeSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: env.WHITE_LIST,
      methods: ["GET", "POST"],
    },
  });

  channel();
};

const channel = async () => {
  io.on("connection", async (socket) => {
    // Listen here
    // socket.on("event", callback);
    runArraysSocket();
  });
};

const generateRandomNumber = () => {
  return (
    "AIx" +
    Math.floor(Math.random() * 100000)
      .toString()
      .padStart(5, "0")
  );
};

let mainArray: string[] = [];
let secondaryArray: string[][] = [];

const runArraysSocket = () => {
  // Run the timeout every 100ms and send the blocks data to user

  const tick = () => {
    if (mainArray.length < 100) {
      mainArray.push(generateRandomNumber());
    } else {
      if (secondaryArray.length < 10) {
        secondaryArray = Array.from({ length: 10 }, () => []);
      }

      secondaryArray[0] = [...secondaryArray[0], generateRandomNumber()];
      secondaryArray[1] = [...secondaryArray[1], generateRandomNumber()];
      secondaryArray[2] = [...secondaryArray[2], generateRandomNumber()];
      secondaryArray[3] = [...secondaryArray[3], generateRandomNumber()];
      secondaryArray[4] = [...secondaryArray[4], generateRandomNumber()];
      secondaryArray[5] = [...secondaryArray[5], generateRandomNumber()];
      secondaryArray[6] = [...secondaryArray[6], generateRandomNumber()];
      secondaryArray[7] = [...secondaryArray[7], generateRandomNumber()];
      secondaryArray[8] = [...secondaryArray[8], generateRandomNumber()];
      secondaryArray[9] = [...secondaryArray[9], generateRandomNumber()];

      // for (let i in secondaryArray) {
      //   const index = Number(i);
      //   secondaryArray[index] = [...secondaryArray[index], generateRandomNumber()];
      // }

      if (secondaryArray[secondaryArray.length - 1].length === 100) {
        mainArray = [];
        secondaryArray = [];
        return;
      }
    }

    io.emit("data", { main: mainArray, sub: secondaryArray });
  };

  setInterval(tick, 100);
};

export default io;
