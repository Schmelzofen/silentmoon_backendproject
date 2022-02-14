const { ObjectId } = require('mongodb');
const { connect } = require('./connection');

async function getUsers() {
    const db = await connect()
    const users = db.collection("silentmoon")
        .find()
        .toArray()
    return users
}