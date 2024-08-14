const catchError = require('../utils/catchError');
const Favorite = require('../models/Favorite');

const getAllF = catchError(async(req, res) => {
    console.log(req.user.id)
    const results = await Favorite.findAll({where:  {userId: req.user.id}});
    return res.json(results);
});

const createF = catchError(async(req, res) => {
    const Id = parseInt(req.params.id)
    const isValid = await Favorite.findOne({where:{
            postId:req.body[0], 
            userId: req.user.id
        }});
     console.log('la validación es: ', isValid)
     if(Id === req.user.id) { 
         if(!isValid) {
            newObject = {
                userId : req.user.id,
                postId : req.body[0]
            } 
    const result = await Favorite.create(newObject);
        return res.status(201).json(result);
    } else return res.status(404).json({msg: 'the post is already in your favorites'})
     
    }
    return res.status(404).json({message: 'no match'})
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Favorite.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Favorite.destroy({ where: {id} });
    if(!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Favorite.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAllF,
    createF,
    getOne,
    remove,
    update
}