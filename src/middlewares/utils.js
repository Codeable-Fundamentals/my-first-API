export const funcion1 = (_req, _res, next) => {
  console.log("Primer Handler ....");
  next();
};

export const funcion2 = (_req, _res, next) => {
  console.log("Segundo Handler....");
  next();
};

export const funcion3 = (_req, _res, next) => {
  console.log("Tercer Handler...");
  _res.send("Hola muchacho@S!");
  next();
};