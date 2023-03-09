export class HTTP {

    /**
     * @param {string} url
     * @returns {Promise<any>}
     */
    static async get(url) {
        const rawResponse = await fetch(url);
        return rawResponse.json();
    }

}