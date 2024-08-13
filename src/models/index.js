const Favorite = require("./Favorite");
const Post = require("./Post");
const User = require("./User");


Post.belongsTo(User);
User.hasMany(Post);

Favorite.belongsTo(Post);
Post.hasMany(Favorite);

Favorite.belongsTo(User);
User.hasMany(Favorite);

//Post.belongsToMany(User, {through: 'favorites'});
//User.belongsToMany(Post, {through: 'favorites'});