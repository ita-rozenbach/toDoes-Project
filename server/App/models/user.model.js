module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: {
                type: String,
                require: true
            },

            userName: {
                type: String,
                require: true
            },
            mail:{
                type:String,
                require:true
            }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const user = mongoose.model("user", schema);
    return user;
};
