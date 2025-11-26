const { getRecipesController } = require("./get-recipes-controller");
const { getRecipeController } = require("./get-recipe-controller");
const { postRecipeController } = require("./post-recipe-controller");
const { putUpdateController } = require("./put-update-controller");
const { patchDeleteController } = require("./patch-delete-controller");
const { postSignupController } = require("./post-signup-controller");
const { postLoginController } = require("./post-login-controller");

module.exports = {
    getRecipesController,
    getRecipeController,
    postRecipeController,
    putUpdateController,
    patchDeleteController,
    postSignupController,
    postLoginController,
};
