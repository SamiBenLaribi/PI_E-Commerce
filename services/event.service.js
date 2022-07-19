

const Event = require("../model/event");


module.exports = {

    delete: _delete,
  //  update,
};


//Delete
async function _delete(id) {
    await Event.findByIdAndRemove(id);
}


