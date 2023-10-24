const sequelize = require('../models/user');

const getuser = async (req, res) => {
  try {
    const user = await sequelize.findAll();
    console.log(user);
    // res.json(userdata);
    res.render('index', { user }); // Render the 'index.ejs' view with the data
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching user1');
  }
}

const getbyiduser = async (req, res) => {
  try {
    const id = req.params.id;
    const existingUser = await sequelize.findOne({
      where: { id: id }
    });

    // If no user is found with the given ID, return a 404 response
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create an object containing the updated data
    const user1 = {
      id: existingUser.dataValues.id,
      name: existingUser.dataValues.name,
      phonenumber: existingUser.dataValues.phonenumber,
      email: existingUser.dataValues.email
    };


    res.render('edit', { user1 });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching user');
  }
}

const postuser = async (req, res) => {
  console.log("hello");
  const name = req.body.name;
  const phonenumber = req.body.phonenumber;
  const email = req.body.email;
  console.log(`Name: ${name}, Phone Number: ${phonenumber}, Email: ${email}`);

  try {
    if (!phonenumber) {
      return res.status(400).json({ message: 'Phone number is required' });
    }
    const user = await sequelize.create({
      name: name,
      phonenumber: phonenumber,
      email: email,
    });
    //console.log(user); // Log the created user
    console.log("hi");
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating the user12');
  }
}


const dltuser = async (req, res) => {
  try {
    const id = req.params.id;
    await sequelize.destroy({ where: { id: id } });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting the user');
  }
}

const updateuser = async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const id = req.params.id;

    const existingUser= await sequelize.findOne({
      where: { id: id }
    });

    if (!existingUser) {
      return res.status(404).json({ message: 'user not found' });
    }

    const user1 = {
      name: req.query.name,
      phonenumber: req.query.phonenumber,
      email: req.query.email
    };

    await sequelize.update(user1, {
      where: { id: id }
    });

    // res.render('index', { user1 });
    res.json({ message: 'User updated successfully' });
  } catch (error) {
    // If there is an error during the update process, handle it and send a 500 (Internal Server Error) response
    console.log(error);
    res.status(500).send('Error updating the user');
  }
};


module.exports = { getuser, getbyiduser, postuser, dltuser, updateuser };