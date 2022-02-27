const Field = require('../models/field');

const createField = async(team) => {
    return await Field.create(team);
}
const getFields = async () => {
     return await Field.find()
}

module.exports = {
    createField,
    getFields
}