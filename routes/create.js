const router = require("express").Router();
const client = require("../elasticSearch");

router.post("/", async (req, res, err) => {
    try {
        await client.index({
            index: "documents",
            id: 1,
            body: {
                character: "FJSDKDSKL",
                quote: "Summer is not coming.",
            },
        });
    } catch (e) {
        console.log(e);
    }

    res.send("created");
});

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
