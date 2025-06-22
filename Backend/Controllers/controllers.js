const { insertalldata, postalldata,patchalldata } = require('../Utility/authfunctions');

const insertControll = insertalldata();
const postControll = postalldata();
const patchControll=patchalldata();


module.exports = {
    insertControll,
    postControll,
    patchControll
};
