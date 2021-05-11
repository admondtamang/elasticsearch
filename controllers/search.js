const searchData = require("../utils/SearchData");

/**
 * get
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

async function getSearchItems(req, res) {
    const query = { from: 0, size: 10 };

    try {
        const data = [];
        const resp = await searchData("documents", query);

        await resp.hits.hits.map((products) =>
            data.push({
                id: products._id,
                data: products._source,
            })
        );

        const result = data.map((item) => {
            return { ...item.data, id: item.id };
        });

        return res.status(200).send({ next_page: resp._scroll_id, data: result });
    } catch (err) {
        console.log("Error in search controller", err);
        return res.status(500).send(err);
    }
}

async function getSearchItemsFromDescription(req, res) {
    const query = {
        size: 2,
        query: {
            match: {
                description: "accusamus",
            },
        },
    };

    try {
        var data = [];
        const resp = await searchData("documents", query);

        await resp.hits.hits.map((products) =>
            data.push({
                id: products._id,
                data: products._source,
            })
        );

        return res.status(200).send({ next_page: resp._scroll_id, data });
    } catch (err) {
        console.log("Error in search controller", err);
        return res.status(500).send(err);
    }
}

module.exports = { getSearchItems };
