function Response(res, code, data) {
    const response = {
        code: code,
        data: data,
    };

    return res.status(200).json(response);
}

module.exports = {
    Response,
};
