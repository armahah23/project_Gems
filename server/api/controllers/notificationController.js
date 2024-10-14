const  Notification =  require ("../schemas/notificationSchema");

exports.createNotification = async (req, res) => {
    const { userId } = req.params;

    const { topic, message } = req.body;
    try {
        const newNotification = new Notification({
            topic,
            message,
            recieverId : userId,
        });
        await newNotification.save();
        return res.status(201).json({
            status: "SUCCESS",
            message: "Notification created successfully",
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: "FAILED",
            message: "An error occurred while creating notification",
        });
    }
}

exports.getNotification = async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.find({recieverId: userId});

        console.log("dfr",notifications);
    
        if (notifications) {
        return res.status(200).json({
            status: "SUCCESS",
            message: "Notifications fetched successfully",
            data: notifications,
        });
        } else {
        return res.status(404).json({
            status: "FAILED",
            message: "No notifications found",
        });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
        status: "FAILED",
        message: "An error occurred while fetching notifications",
        });
    }
}