import Post from "./model";

exports.create = (req, res, next) => {
  const newPost = new Post(req.body);

  newPost.save(err => {
    if (err) {
      return next(err);
    }

    res.send(newPost);
  });
};

exports.get = (req, res, next) => {
  Post.find({}, (err, posts) => {
    if (err) {
      return next(err);
    }
    res.json(posts);
  });
}

exports.getAll = (req, res, next) => {
  Post.find({}, (err, posts) => {
    if (err) {
      return next(err);
    }
    res.json(posts);
  });
};

exports.getById = (req, res, next) => {
  Post.findById(req.params.id, (err, posts) => {
    if (err) {
      return next(err);
    }
    res.json(posts);
  });
};

exports.deleteById = (req, res, next) => {
  Shift.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      return next(err);
    }
    res.sendStatus(204);
  });
};

const updateOpts = {
  runValidators: true
};

exports.updateById = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body, updateOpts, (err, shift) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
};
