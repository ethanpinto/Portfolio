import React from "react"
import Image from "next/image"

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "Python" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "C" },
    { skill: "Flutter" },
    { skill: "Altium" }
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Ethan and I am a{" "}
                            <span className="font-bold">{"creative"}</span>,
                            <span className="font-bold">{" diligent"}</span>, and
                            <span className="font-bold">{" driven"}</span> electrical and computer engineering student
                            at The University of Queensland located in St Lucia and am
                            in my final year of completing my BE/ME.
                        </p>
                        <br />
                        <p>
                            I have worked within a wide range of industries including automation,
                            aerospace and software development. I like exploring the world of entrepreneurship
                            and have been involved in UQ Ventures programs such as Startup Adventures,
                            Industry Challenges and the Curiosity Program.
                        </p>
                        <br />
                        <p>
                            Through several volunteer roles and internships, I have had the chance to
                            develop skills including graphic design, UX/UI Design, video editing and social media
                            marketing. In my free time I enjoy running, playing football, and catching up with friends.
                        </p>
                        <br />
                        <p>
                            I have a strong passion for technology and am always looking
                            for opportunities to learn, grow and gain valuable experience
                            as an aspiring engineer. 🙂
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        {/* <Image
                            src="/hero-image.png"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
