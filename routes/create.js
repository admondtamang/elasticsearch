const router = require("express").Router();
const client = require("../elasticSearch");
const Controllers = require("../controllers");

router.get("/search", Controllers.getSearchItems);

router.put("/", async (req, res) => {
    try {
        await client.update({
            index: "documents",
            id: 1,
            body: {
                doc: {
                    character: "fake",
                },
            },
        });
        res.send("updated");
    } catch (e) {
        console.log(e);
    }
});

router.delete("/", async (req, res) => {
    try {
        await client.delete({
            index: "documents",
            id: 1,
        });
        res.send("deleted");
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
