

const Client = require("../model/client");


module.exports = {

    delete: __delete,
    //  update,
};


//Delete
async function __delete(id) {
    await Client.findByIdAndRemove(id);
}


