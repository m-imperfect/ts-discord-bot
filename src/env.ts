import dotenv from "dotenv";

let path = "./.env";
for (let index = 0; index < process.argv.length; index++) {
  if (process.argv[index].toLowerCase().trim() == "--env-path" && index + 1 < process.argv.length) {
    path = process.argv[index + 1];
    break;
  }
}

dotenv.config({ path, encoding: "utf8" });
