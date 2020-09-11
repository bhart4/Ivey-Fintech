const firebase = require('firebase');

export default class FireBaseWrapper {
    /**
     *
     * @param config - Object containing related apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderID
     */
    constructor(config) {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.database = firebase.database();
        console.log(`Successfully Connected to Firebase instance hosted at ${config.databaseURL}`)
    }

    /**
     *
     *
     * @param path - delineates the subtree to which the ref will point
     * @returns path to item or subtree in database
     */
    getPath(path) {
        return this.database.ref()
    }

    /**
     *
     * @param path
     * @returns snapshot of subtree in database
     */
    async getSnapshot(path) { //todo: fix this mess of async

        let snapshot = await this.getPath()
            .once("value")
            .then(function (snapshot) {        });
        return snapshot
    }


}