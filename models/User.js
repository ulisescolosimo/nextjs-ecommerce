import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required: true},
    password: [{type: String, required: true}],
    role: {type: String, required: true},
    image: {type: String, required: true},
    from: {type: String, required: true},
    logged: {type: Boolean, required: true}
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User;