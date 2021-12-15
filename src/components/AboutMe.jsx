import React from "react";
import SectionHeading from "./SectionHeading";
import aboutMeImage from "../Images/aboutMe.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function AboutMe() {
    return (
        <>
            <section className="relative py-20 bg-gray-200" id="about-me">
                <div className="container mx-auto px-4">
                    <SectionHeading name={"About Lidia"} />
                    <hr className="mb-5 border-gray-400" />
                    <div>
                        <div className = "w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img src={aboutMeImage} alt="" className="max-w-full rounded-lg shadow-lg" />
                        </div>
                        <div className="flex flex-wrap items-start flex-col space-y-2 mt-2">
                            <div className="mx-auto md:mx-0">
                                <h1 className="text-4xl font-Cormorant font-semibold">Lidia Plotkina</h1>
                            </div>
                            {/* <div>
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
                            </div> */}
                            <div>
                                <h2 className="text-2xl font-Cormorant font-semibold">Coach Qualifications:</h2>
                                <h3 className="text-xl font-Cormorant font-thin">ICF Associate Certified Coach</h3>
                                <h3 className="text-xl font-Cormorant font-thin">CCA Professional Certified Coach</h3>
                            </div>
                            <div>
                                <h2 className="text-2xl font-Cormorant font-semibold">Academic Qualifications:</h2>
                                <h3 className="text-xl font-Cormorant font-thin">Master of Applied Psychology in Coaching (HELP University, Kuala Lumpur)</h3>
                                <h3 className="text-xl font-Cormorant font-thin">Bachelor Degree in Law/ International Public Law (Moscow State Academy of Law)</h3>
                            </div>
                            <div>
                                <h2 className="text-2xl font-Cormorant font-semibold indent-sm">Coaching Niche: </h2>
                                <h3 className="text-xl font-Cormorant font-thin">Developmental & Mindfulness Coaching</h3>
                                <ul className="list-disc list-inside text-xl font-Cormorant font-normal ml-10">
                                    <li>I am a passionate advocate of Holistic lifestyle which can be achieved through synthesis of Positive Psychology, Mindfulness & Strengths' based approach. <br />My practice is built around Developmental Coaching: any goal is real and achievable through inner change & mindset shift</li>
                                    <li>My skill-set focuses on
                                        <ul className="list-none list-inside text-xl font-Cormorant font-normal mx-10">
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="py-1 px-2  mr-2">
                                                            <FontAwesomeIcon icon={ faCheck} size = "sm"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3>Personal and Professional Goals achievement through paradigm shift</h3>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="py-1 px-2  mr-2">
                                                            <FontAwesomeIcon icon={ faCheck} size = "sm"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3>People's empowerment to attain & sustain a well-balanced life by making conscious life choices</h3>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="py-1 px-2  mr-2">
                                                            <FontAwesomeIcon icon={ faCheck} size = "sm"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3>Emotional Intelligence development</h3>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="py-1 px-2  mr-2">
                                                            <FontAwesomeIcon icon={ faCheck} size = "sm"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3>Stress management practice </h3>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-2">
                                                <div className="flex items-center">
                                                    <div>
                                                        <span className="py-1 px-2  mr-2">
                                                            <FontAwesomeIcon icon={ faCheck} size = "sm"/>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h3>Creation of meaningful and joyful relationships</h3>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>I hold Master’s degree in Applied Psychology in Coaching with specialization in Emotional Intelligence & Human Relationships with a proven track record of coaching in Malaysia and abroad. Currently pursuing PhD in Psychology and Coaching.</li>
                                    <li>I am a qualified Lawyer with many years of diverse corporate experience in various industries such as Pharmaceutical industry, E-commerce and Legal. I am a Certified Yoga instructor with Yoga Alliance and I incorporate best mindfulness techniques in my practice </li>
                                    <li>I am a global traveler, being born in Moscow, I moved to Asia 6 years ago. I believe that the borders only exist on the maps, but not in the human minds. Coaching is a universal tool to expand the potential & cross all the borders to achieve fulfillment and meaningful life</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}