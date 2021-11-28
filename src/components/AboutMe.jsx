import React from "react";
import SectionHeading from "./SectionHeading";
import aboutMeImage from "../Images/aboutMe.jpeg";

export default function AboutMe() {
    return (
        <>
            <section className="relative py-20 bg-gray-200" id="about-me">
                <div className="container mx-auto px-4">
                    <SectionHeading name={"About Lidia"} />
                    <hr className="mb-5 border-gray-600" />
                    <div>
                        <div className = "w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img src={aboutMeImage} alt="" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="flex flex-wrap items-start flex-col space-y-2 mt-2">
                            <div>
                                <h1 className="text-4xl font-Cormorant font-thin">Lidia Plotkina</h1>
                            </div>
                            <div>
                                <h2 className =" text-2xl font-Cormorant font-thin">Coaching Niche(s): Developmental Coaching</h2>
                            </div>
                            <div>
                                <p className="text-gray-600 text-xl font-Cormorant font-normal">
                                    Lidia is a passionate advocate of Holistic lifestyle which can be achieved through synthesis of Positive Psychology, Mindfulness & Yoga.
                                    Lidia practices developmental Coaching approach: any goal is real and achievable through inner change & mindset shift.
                                </p>
                                <p className="text-gray-600 text-xl font-Cormorant font-normal">
                                    Lidia’s skill-set focuses around empowering people to attain & sustain a balanced life by making conscious positive life choices.
                                    She provides techniques & tools for being more present, practicing proper nutrition & exercise regime, stress reduction, addiction free life & creating joyful relationships.
                                </p>
                                <p className="text-gray-600 text-xl font-Cormorant font-normal">
                                    Lidia is a Masters degree holder in Applied Psychology in Coaching with specialization in Emotional Intelligence & Human Relationships.
                                    Lidia is a qualified Lawyer with many years of diverse corporate experience in various industries such as Innovative Pharmaceutical industry, E-commerce startup projects,
                                    Legal & she is a Certified Yoga instructor with Yoga Alliance with a proven track record of coaching in Malaysia and abroad.
                                </p>
                                <p className="text-gray-600 text-xl font-Cormorant font-normal">Lidia is a global traveler, being born in Moscow (Russia) she moved to Asia 5 years ago & she believes that the borders only exist on the maps,
                                    but not in the human minds.  Coaching is a universal tool to expand the potential & cross all the borders to achieve fulfillment and meaningful life.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}