const mongoose = require("mongoose");
const { Schema } = mongoose;
var uniqueValidator = require("mongoose-unique-validator");

const categorySchema = new Schema({
  categoryName: { type: String, required: true, unique: true },
  parentCategoryName: { type: String, ref: "Category" }, //부모 카테고리명
});

categorySchema.plugin(uniqueValidator);

const category = mongoose.model("Category", categorySchema);

module.exports = category;
