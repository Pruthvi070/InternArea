const express = require("express");
const router = express.Router();

// Updated question-answer database with job portal category
const qaDatabase = {
    internship: {
        "what is an internship?": "An internship is a short-term work experience offered by companies to help students or graduates gain relevant skills.",
        "how to apply for an internship?": "You can apply through platforms like LinkedIn, Internshala, or directly on company websites.",
    },
    general: {
        "what is your name?": "I am your chatbot assistant!",
        "what is the weather today?": "I don’t know the current weather, but you can check on a weather app.",
    },
    job_portal: {
        "what is a job portal?": "A job portal is an online platform where employers post job openings and job seekers apply for jobs.",
        "how to register on a job portal?": "To register, create an account by providing your email, password, and personal details like your name and resume.",
        "how to apply for a job on a portal?": "Log in to your account, search for a job using filters, and click 'Apply' after uploading your resume and cover letter.",
        "what are the benefits of using a job portal?": "Job portals provide access to multiple job opportunities, advanced search filters, and allow easy application tracking.",
        "how to create a good profile on a job portal?": "Complete your profile with accurate personal details, upload an updated resume, and list relevant skills and experiences.",
        "what are featured jobs in a portal?": "Featured jobs are highlighted job listings that employers pay extra for to get more visibility.",
        "how to track job applications?": "Most portals have a 'My Applications' section where you can see the status of your applications, such as 'Pending,' 'Reviewed,' or 'Rejected.'",
    },
};

// Handle POST requests
router.post("/", (req, res) => {
    const { question } = req.body;

    // Validate input
    if (!question) {
        return res.status(400).json({ answer: "Please ask a valid question." });
    }

    const lowerCaseQuestion = question.toLowerCase();

    // Search in the database
    for (const [topic, qa] of Object.entries(qaDatabase)) {
        if (qa[lowerCaseQuestion]) {
            return res.json({ answer: qa[lowerCaseQuestion] });
        }
    }

    // Default response if no match found
    return res.json({
        answer: "I don't have an answer for that right now. Try asking about internships, general topics, or job portals!",
    });
});

module.exports = router;
