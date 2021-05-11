const elasticSearch = require("elasticsearch");
const esClient = elasticSearch.Client({
    host: "http://52.168.142.236:9200",
});

module.exports = esClient;
