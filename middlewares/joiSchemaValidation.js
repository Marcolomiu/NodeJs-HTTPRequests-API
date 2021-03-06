module.exports.validate = (schema, data) => {
    return (req, res, next) => {

        let objToValidate = {};

        if (data === `body`) objToValidate = req.body;
        else if (data ===`query`) objToValidate = req.query;
        else if (data ===`path`) objToValidate = req.params;

        const result = schema.validate(objToValidate);

        if (result.error) {
            const errorMsg = result.error.details.map((value) => value.message);
            const responseObj = {
                status: 400,
                body: errorMsg
            };
            return res.status(responseObj.status).send(responseObj);
        } else next();
    }
}