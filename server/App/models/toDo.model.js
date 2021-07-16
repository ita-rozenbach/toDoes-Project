module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            userId: {
                type: Object,
                require:true
            },
            title: {
                type: String,
                require: true
            },
            completed:{
                type:Boolean,
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
    console.log("ddd")

    const toDo = mongoose.model("toDo", schema);
    return toDo;
};
