const Field = require('../models/field');

const createField = async(team) => {
    return await Field.create(team);
}
const getFields = async () => {
     return await Field.find()
}
const getField = async (fieldId) => {
    return await Field.findById(fieldId);
}
const deleteField = async (fieldId) => {     
    const team = await Field.findByIdAndDelete(fieldId);
    return false;
}

module.exports = {
    createField,
    getFields,
    getField,
    deleteField
}