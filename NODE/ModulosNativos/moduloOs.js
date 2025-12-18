import os from "node:os";

console.log("memoria libre", os.freemem());
console.log("tipo arquitectura", os.arch());
console.log("tipo plataforma", os.platform());
console.log("version plataforma", os.release());
console.log("version plataforma", os.version());
console.log("cpus", os.cpus());
console.log("cpus", os.cpus().length);
