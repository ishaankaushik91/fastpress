import express from "express";
import os from "os";
import cluster from "node:cluster";
const app = express();
const CPUS = os.cpus().length;

const PORT // ASSIGN A PORT, ex: PORT = 5000

/* CODE ALL API's IN BETWEEN THE GIVEN BLOCKS




YOU CAN HAVE DIFFERENT CONTROLLERS */

if (cluster.isPrimary)
{
    DISTRIBUTE(0);
}
else
{
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING AT PORT ${PORT}`);
    });
}

function DISTRIBUTE(start)
{
    if (start < CPUS)
    {
        cluster.fork();
        return DISTRIBUTE(start + 1);
    }

    cluster.on(`exit`, (worker, code, signal) => {
        console.log(`Worked with pid --> ${worker.process.pid} dies`);
        cluster.fork();
    });
}