import fs from "fs/promises";
import { execFile } from "child_process";

async function Boilerplate() {
  try {
        
    let fileData = await fs.readFile('../fastpress/main.js');

    await fs.writeFile('index.js', fileData.toString());

    await fs.rmdir('../fastpress', {recursive : true});

  } catch (error) {
    console.log(error);
  }
}

export default Boilerplate;