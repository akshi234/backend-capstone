const express = require("express");
const router = express.Router();
const JobPost = require("../model/job");
const authorization = require("../middleware/authorization");

router.post("/JobPosts", authorization, async (req, res) => {
  try {
    const {
      companyName,
      logoURL,
      position,
      salary,
      jobType,
      workType,
      location,
      description,
      skills,
      about,
    } = req.body;

    if (
      !companyName ||
      !logoURL ||
      !position ||
      !salary ||
      !jobType ||
      !workType ||
      !location ||
      !description ||
      !skills ||
      !about
    ) {
      return res.status(404).json({ error: "All fields are required" });
    }
    await JobPost.create({
      companyName,
      logoURL,
      position,
      salary,
      jobType,
      workType,
      location,
      description,
      about,
      skills,
    });

    return res.json({
      message: "Job post created successfully",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: "internal server error" });
  }
});

//Edit Job Post API
router.put("/JobPosts/:jobId", authorization, async (req, res, next) => {
  const { postedBy, updates } = req.body;

  try {
    const userId = new mongoose.Types.ObjectId(postedBy);

    if (userId.equals(req.user._id)) {
      const updatedJob = await Job.findByIdAndUpdate(req.body._id, updates, {
        new: true,
      });

      if (!updatedJob) {
        return res.status(404).json({ message: "Job not found" });
      }

      res.status(402).json({ message: "Job updated successfully", updatedJob });
    } else {
      res.status(400).json({ message: "Unauthorized" });
    }
  } catch (error) {
    next(error);
  }
});

//Get job with filters API
router.post("/Filterjobs", async (req, res) => {
  try {
    const { skills, title } = req.query;

    const query = {};
    if (skills) {
      query.skills = { $in: skills.split(",") };
    }
    if (title) {
      query.position = { $regex: new RegExp(title, "i") };
    }

    const jobs = await JobPost.find(query);

    res.status(200).json({ data: jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Detail API
router.get("/jobposts", async (req, res) => {
  const jobID = req.params.id;

  try {
    const jobPost = await jobPost.findById(jobID);

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }

    return res.json({ jobPost });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
