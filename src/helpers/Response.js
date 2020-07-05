/**
 * @exports
 * @class Response
 */
class Response {
  /**
   * @static
   * @param {object} res response object
   * @param {string} message a specific message
   * @param {array} data array or object
   * @param {integer} status status code
   * @returns {object} object
   */
  static successMessage(res, message, data = null, status) {
    res.status(status).json(
      data
        ? {
            status: 'success',
            statusCode: status,
            message,
            data,
          }
        : {
            status: 'success',
            statusCode: status,
            message,
          }
    );
  }

  /**
   * @static
   * @param {object} res response object
   * @param {string} error specific error message
   * @param {integer} status status code
   * @returns {object} object
   */
  static errorMessage(res, error, status) {
    res.status(status).json({
      status: 'fail',
      statusode: status,
      error,
    });
  }
}

export default Response;
