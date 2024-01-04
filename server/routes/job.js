const express = require("express");
const router = express.Router();
const JobPost = require("../model/job");
const mongoose = require("mongoose");
const authenticateUser = require("../middleware/authentication");
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
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "internal server error" });
  }
});

//Edit Job Post API
router.put("/:id", authorization, async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      companyName,
      logoURL,
      jobPosition,
      salary,
      jobType,
      workType,
      location,
      description,
      skills,
      about,
    } = req.body;

    const updatedJob = await JobPost.findByIdAndUpdate(
      id,
      {
        companyName,
        logoURL,
        jobPosition,
        salary,
        jobType,
        workType,
        location,
        description,
        skills,
        about,
      },
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job updated successfully", updatedJob });
  } catch (error) {
    next(error);
  }
});

//Get job with filters API
router.post("/Filterjobs", async (req, res) => {
  try {
    const { skills, position } = req.body;
    console.log("Received Data:", req.body);

    const query = {};
    if (skills && Array.isArray(skills) && skills.length > 0) {
      query.skills = { $in: skills };
    }
    if (position) {
      query.position = { $regex: new RegExp(position, "i") };
    }
    console.log("MongoDB Query:", query);
    const jobs = await JobPost.find(query);

    console.log("Search result:", jobs);

    res.status(200).json({ data: jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Detail API
router.get("/fetchPost/:id", authorization, async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400);
      return next(new Error("Invalid ID format"));
    }

    const jobPost = await JobPost.findById(id);

    if (!jobPost) {
      return res.status(404).json({ message: "Job post not found" });
    }
    console.log(jobPost.skills);

    return res.json({ jobPost });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
