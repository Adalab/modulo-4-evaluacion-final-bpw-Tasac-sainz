const { getRecipesController } = require("./get-recipes-controller");
const { getRecipeController } = require("./get-recipe-controller");
const { postRecipeController } = require("./post-recipe-controller");
const { putUpdateController } = require("./put-update-controller");
const { patchDeleteController } = require("./patch-delete-controller");

module.exports = {
    getRecipesController,
    getRecipeController,
    postRecipeController,
    putUpdateController,
    patchDeleteController,
};
