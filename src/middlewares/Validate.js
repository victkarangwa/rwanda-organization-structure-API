import { check} from 'express-validator';

class Validator {

  static rules() {
    return [
      check('p', 'Please provide valid Rwandan province name')
        .isString()
        .optional(),
      check('d', 'Please provide valid Rwandan district name')
        .isString()
        .optional(),
      check('s', 'Please provide valid Rwandan sector name')
        .isString()
        .optional(),
      check('c', 'Please provide valid Rwandan cell name')
        .isString()
        .optional(),
    ];
  }
}
export default Validator;
