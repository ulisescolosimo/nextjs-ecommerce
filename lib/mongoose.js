import mongoose from 'mongoose';

export async function initMongoose () {
    if(mongoose.connections.readyState === 1) {
        return await mongoose.connections.asPromise()
    }
    return await mongoose.connect(process.env.MONGODB_URI)
}