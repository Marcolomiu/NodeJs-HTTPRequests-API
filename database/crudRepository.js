module.exports.save = async (obj) => {
    const response = { status: false };
    try {
        const doc = await obj.save();
        response.status = true;
        response.result = doc;
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-save: ${error}`);
    }
    return response;
};

module.exports.findOneAndUpdate = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.findOneAndUpdate(
            data.findQuery,
            data.updateQuery,
            {new: true, projection: data.projection, useFindAndModify: false});
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findOneAndUpdate: ${error}`);
    }
    return response;
};

module.exports.findOneAndDelete = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.findOneAndDelete(
            data.findQuery,
            {projection: data.projection});
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findOneAndDelete: ${error}`);
    }
    return response;
};

module.exports.findById = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.findById(
            data.findQuery,
            data.projection);
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findById: ${error}`);
    }
    return response;
};

module.exports.findSpecific = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.find(
            data.findQuery,
            data.projection
            )
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findSpecific: ${error}`);
    }
    return response;
};

module.exports.find = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.find(data.projection);
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-find: ${error}`);
    }
    return response;
};

module.exports.findBetween = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.find({date: {$gte: data.dates.start, $lte: data.dates.end}}, data.projection);
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findBetween: ${error}`);
    }
    return response;
};

module.exports.findOne = async (data) => {
    const response = { status: 500 };
    try {
        const doc = await data.model.findOne(
            data.findQuery,
            data.projection);
        if (doc) {
            response.status = 200;
            response.result = doc;
        } else {
            response.status = 404;
        }
    } catch (error) {
        response.error = error;
        console.log(`ERROR-crudRepository-findOne: ${error}`);
    }
    return response;
};