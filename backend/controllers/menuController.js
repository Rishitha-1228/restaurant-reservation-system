const Menu =
require("../models/Menu");

exports.getMenus =
async (req, res) => {

  const menus =
    await Menu.find()
      .populate("restaurant");

  res.json(menus);
};