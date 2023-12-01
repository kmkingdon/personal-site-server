import { MongoClient, ServerApiVersion } from "mongodb";
var connectionString = process.env.MONGO_URI || "";
var client = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});
var conn;
try {
    conn = await client.connect();
} catch (e) {
    console.error(e);
}
var db = conn === null || conn === void 0 ? void 0 : conn.db("kmkingdon");
export default db;

//# sourceMappingURL=conn.js.map