const {BOOK_VALIDATION} = require("../validation/bookValidation");

module.exports.validateCreateBookMW = (req, res, next) => {
  BOOK_VALIDATION.validate(req.body)
    .then((validateBook) => {
      req.book = validateBook;
      next();
    })
    .catch((err) => {
      res.send(err.message);
    });
};
