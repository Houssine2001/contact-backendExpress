//@desc Get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
    res.status(200).json({message : "Get all contacts"});
};


//@desc Create New contact
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
    console.log("The request body is :",req.body);
    const {name , email,phone } = req.body;
        if (!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.status(200).json({message : "Create contact"});
};



//@desc Get contact
//@route GET /api/contacts/:id
//@access Public
const getContact = (req, res) => {
    res.status(200).json({message : 'Get contact for ' + req.params.id });
};



//@desc Update contact
//@route POST /api/contacts/:is
//@access Public
const updateContact = (req, res) => {
    res.status(200).json({message : 'Update contact for ' + req.params.id });
};


//@desc Delete New contact
//@route PUT /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
    res.status(200).json({message : 'Delete contacts for ' + req.params.id });
};


module.exports = {
    getContacts ,
    createContact ,
    getContact ,
    updateContact ,
    deleteContact,
    };
