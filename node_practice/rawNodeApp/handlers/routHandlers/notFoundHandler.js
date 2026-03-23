/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Atiqul Bari
 * Date: 03/23/2026
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;