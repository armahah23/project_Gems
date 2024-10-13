const  mongoose =  require ("mongoose");

const NotificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  topic: {
    type: String,
  },

  recieverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  read: {
    type: Boolean,
    default: false,
  },
});

const Notification = mongoose.model("Notification", NotificationSchema);
module.exports =  Notification;
