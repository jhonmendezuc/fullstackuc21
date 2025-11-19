const validateRequest = (req, res, next) => {
  let numero = 10;
  if (numero > 5) {
    console.log("numero es mayor a 5, est'a autorizado de continuar");
    console.log(req);
    next();
  } else {
    return res.status(401).json({ mensaje: "acceso denegado" });
  }
};

export default {
  validateRequest,
};
