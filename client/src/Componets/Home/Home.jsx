import React, { useEffect, useState } from "react";
import first from "../../Assets/Firstslide.png";
import second from "../../Assets/secondslide.webp";
import third from "../../Assets/thirdsilde.webp";
import fouth from "../../Assets/fourthslide.webp";
import "./home.css";
import Job from "./Job";



import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("Big Brands");
    const [internshipData, setInternshipData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://internshipbackend-vwja.onrender.com/api/internship`
                );
                setInternshipData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const filterInternShips = internshipData.filter(
        (item) => !selectedCategory || item.category === selectedCategory
    );

    const handleSlide = (direction) => {
        const contianer = document.getElementById("container");
        const step = 100;
        if (direction === "left") {
            setCurrentSlide((preveSlibe) => (preveSlibe > 0 ? preveSlibe - 1 : 0));
        } else {
            setCurrentSlide((preveSlibe) => (preveSlibe < 3 ? preveSlibe + 1 : 3));
        }
        sideScroll(contianer, direction, 25, step, 10);
    };
    const handleSlideIntern = (direction) => {
        const contianer = document.getElementById("container2");
        const step = 100;
        if (direction === "left") {
            setCurrentSlide((preveSlibe) => (preveSlibe > 0 ? preveSlibe - 1 : 0));
        } else {
            setCurrentSlide((preveSlibe) => (preveSlibe < 3 ? preveSlibe + 1 : 3));
        }
        sideScrollIntern(contianer, direction, 25, step, 10);
    };
    return (
        <>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                    Make your dream career a reality
                </h1>
                <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
                <p className="text-center text-lg sm:text-xl font-bold text-yellow-300 animate-pulse">
                    Trending on InternArea 🔥
                </p>
            </div>
            <div className="imgs flex justify-center" id="container">
                <div className="slide flex mt-10 " id="content">
                    <img className="slide_Img ml-4" src={first} alt="" />
                    <img className="slide_Img ml-4" src={second} alt="" />
                    <img className="slide_Img ml-4" src={third} alt="" />
                    <img className="slide_Img ml-4" src={fouth} alt="" />
                </div>
            </div>
            <div className="flex BUttons">
                <button className="back" onClick={() => handleSlide("left")}>
                    {" "}
                    <i className="bi bi-chevron-left" id="sideBack"></i>
                </button>
                <button className="next" onClick={() => handleSlide("right")}>
                    {" "}
                    <i className="bi bi-chevron-right" id="slide"></i>
                </button>
            </div>

            <div className="infoys">
                <div className="info-intern">
                    <div class="flex items-center justify-center w-full ">
                        <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-center rounded-lg p-10 w-full max-w-4xl">
                            <h1 class="text-white text-4xl font-bold mb-4">Latest internships on Intern Area</h1>
                            <div class="flex items-center justify-center">
                                <div class="h-1 w-16 bg-yellow-500 mb-2"></div>
                            </div>
                            <p class="text-yellow-300 text-lg font-semibold">
                                Trending on InternArea <i class="fas fa-fire"></i>
                            </p>
                        </div>
                    </div>

                    <div className="categories flex flex-wrap mt-14 items-center">
                        <p className="font-semibold mr-4">POPULAR CATEGORIES:</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ml-6">
                            <span
                                className={`category ${selectedCategory === "Big Brands" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Big Brands")}
                            >
                                Big Brands
                            </span>
                            <span
                                className={`category ${selectedCategory === "Work From Home" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Work From Home")}
                            >
                                Work From Home
                            </span>
                            <span
                                className={`category ${selectedCategory === "Part-time" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Part-time")}
                            >
                                Part-time
                            </span>
                            <span
                                className={`category ${selectedCategory === "MBA" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("MBA")}
                            >
                                MBA
                            </span>
                            <span
                                className={`category ${selectedCategory === "Engineering" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Engineering")}
                            >
                                Engineering
                            </span>
                            <span
                                className={`category ${selectedCategory === "media" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("media")}
                            >
                                Media
                            </span>
                            <span
                                className={`category ${selectedCategory === "Design" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Design")}
                            >
                                Design
                            </span>
                            <span
                                className={`category ${selectedCategory === "Data Science" ? "bg-blue-500 text-white" : ""}`}
                                onClick={() => setSelectedCategory("Data Science")}
                            >
                                Data Science
                            </span>
                        </div>
                    </div>


                </div>
                <div className="internships" id="container2">
                    <div className="internShip-Info flex">
                        {filterInternShips.map((data, index) => (
                            <div className="int-1 mt-6" key={index}>
                                <p className="mb-4 mt-3" id="boxer">
                                    {" "}
                                    <i className="bi bi-arrow-up-right text-blue-500"></i>{" "}
                                    Actively Hiring
                                </p>
                                <p>{data.title}</p>
                                <small className="text-slate-400 text-sm">{data.company}</small>

                                <hr className="mt-5" />
                                <p className="mt-3">
                                    <i class="bi bi-geo-alt-fill"></i> {data.location}{" "}
                                </p>
                                <p className="mt-1">
                                    {" "}
                                    <i class="bi bi-cash-stack"></i> {data.stipend}
                                </p>
                                <p className="mt-1">
                                    <i class="bi bi-calendar-fill"></i> {data.Duration}
                                </p>
                                <div className="more flex justify-between mt-6">
                                    <span className="bg-slate-200 text-slate-400 w-20 rounded-sm text-center">
                                        Internship
                                    </span>
                                    <Link to={`/detailInternship?q=${data._id}`}>
                                        <span className="text-blue-500 mr-2">
                                            View details <i class="bi bi-chevron-right"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex BUttons mt-9">
                    <button className="back" onClick={() => handleSlideIntern("left")}>
                        {" "}
                        <i className="bi bi-chevron-left" id="sideBack"></i>
                    </button>
                    <button className="next" onClick={() => handleSlideIntern("right")}>
                        {" "}
                        <i className="bi bi-chevron-right" id="slide"></i>
                    </button>
                </div>
            </div>

            <Job />

            <hr />


            <div className="analytics mt-8 flex flex-wrap justify-center items-center text-center mx-auto space-x-10">
                <div className="text-block mt-5 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <span className="font-bold text-6xl text-blue-600 mx-10 transition-all duration-300 hover:text-blue-800">300K+</span>
                    <p className="mt-2 text-lg text-gray-600">companies hiring</p>
                </div>
                <div className="text-block mt-5 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <span className="font-bold text-6xl text-blue-600 mx-10 transition-all duration-300 hover:text-blue-800">10K+</span>
                    <p className="mt-2 text-lg text-gray-600">new openings everyday</p>
                </div>
                <div className="text-block mt-5 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <span className="font-bold text-6xl text-blue-600 mx-10 transition-all duration-300 hover:text-blue-800">21M+</span>
                    <p className="mt-2 text-lg text-gray-600">active students</p>
                </div>
                <div className="text-block mt-5 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                    <span className="font-bold text-6xl text-blue-600 mx-10 transition-all duration-300 hover:text-blue-800">600K+</span>
                    <p className="mt-2 text-lg text-gray-600">learners</p>
                </div>
            </div>


            <div className="flex flex-col items-center py-8 bg-gray-900 mt-10">
                <div className="mb-8">
                    <p className="text-white text-2xl font-semibold text-center">
                        Empower your career with InternArea today
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-sm px-4">
                    <a
                        href="/register"
                        className="flex items-center justify-center bg-white hover:bg-gray-100 text-gray-800 rounded-full py-3 px-6 transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        <div className="mr-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2"
                                />
                            </svg>
                        </div>
                        <span className="font-medium">Sign in with Google</span>
                    </a>

                    <a
                        href="/register"
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full py-3 px-6 font-medium transition duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Register
                    </a>
                </div>
            </div>



        </>
    );
}

export default Home;

function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
        if (direction === "left") {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}
function sideScrollIntern(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
        if (direction === "left") {
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if (scrollAmount >= distance) {
            window.clearInterval(slideTimer);
        }
    }, speed);
}


