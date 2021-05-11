const esClient = require("../elasticSearch");

async function searchData(indexName, query) {
    return await esClient.search({
        index: indexName,
        scroll: "1m",
        body: query,
    });
}

module.exports = searchData;
