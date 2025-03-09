"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"

const ContactSection = () => {
    return (<section id="contact">
        <h1 className="my-10 text-center font-bold text-4xl">
            Get in Touch!
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-28">
            <div>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                    <div className=" md:w-1/2">
                        <Image
                            src="/contact.png"
                            alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="mt-8 md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
                        <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                            I am always open to new opportunities and collaborations. Feel free to reach out to me through email or LinkedIn.
                        </p>
                        <div className="flex flex-row align-bottom space-x-4">
                            <a href="mailto:ethan.pinto@gmail.com" className="text-teal-500 hover:underline">ethan.pinto@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactSection
