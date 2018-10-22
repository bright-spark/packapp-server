const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const buildSchema = new Schema({
  appName: {
    type: String,
    required: true,
    maxlength: 50
  },
  url: {
    type: String,
    required: true,
    maxlength: 2083
  },
  splashScreen: {
    type: String,
    required: true,
    maxlength: 30
  },
  launcherIcon: {
    type: String,
    required: true,
    maxlength: 30
  },
  primaryColor: {
    type: String,
    required: true,
    maxlength: 9
  },
  secondaryColor: {
    type: String,
    required: true,
    maxlength: 9
  },
  camera: {
    type: Boolean,
    required: true
  },
  externalUrls: {
    type: Boolean,
    required: true
  },
  gps: {
    type: Boolean,
    required: true
  },
  landscape: {
    type: Boolean,
    required: true
  },
  portrait: {
    type: Boolean,
    required: true
  },
  progressBar: {
    type: Boolean,
    required: true
  },
  ratingDays: {
    type: Number,
    required: true,
    default: 3,
    max: 2000
  },
  ratings: {
    type: Boolean,
    required: true
  },
  uploads: {
    type: Boolean,
    required: true
  },
  zoom: {
    type: Boolean,
    required: true
  },
  orientation: {
    type: String,
    enum: ['portrait', 'landscape', 'unspecified'],
    required: true
  },
  builtApk: {
    type: String
  },
  buildError: {
    type: String
  }
});

const Item = mongoose.model('Build', buildSchema);

module.exports = Item;
