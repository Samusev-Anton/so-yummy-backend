const { Recipe } = require("../../models");

const searchList = async (req, res) => {
  // const { category } = req.body;
  const objForSearch = req.body;
  const key = Object.keys(objForSearch);
  const value = Object.values(objForSearch);
  console.log(key[0] === "title");
  console.log(value);
  // console.log(category);

  if (key[0] === "category") {
    const result = await Recipe.find({
      category: { $regex: value[0], $options: "i" },
    });
    return res.status(201).json({
      status: "success",
      code: 201,
      data: result,
    });
  }

  if (key[0] === "title") {
    const result = await Recipe.find({
      title: { $regex: value[0], $options: "i" },
    });
    return res.status(201).json({
      status: "success",
      code: 201,
      data: result,
    });
  }

  // const result = await Recipe.find({
  //   title: { $regex: value[0], $options: "i" },
  // });

  // const result = {(key[0] === "title") ?
  //   await Recipe.find({
  //   title: { $regex: value[0], $options: "i" },
  // }):await Recipe.find({
  //   title: { $regex: value[0], $options: "i" },
  // })};

  // res.status(201).json({
  //   status: "success",
  //   code: 201,
  //   data: result,
  // });
};

module.exports = searchList;
