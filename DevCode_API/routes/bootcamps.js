import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "show all bootcamps" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `show single bootcamp ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: " create a bootcamps" });
});

router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `update a bootcamp ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `delete a bootcamp ${req.params.id}` });
});

export default router;
