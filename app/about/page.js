export default function About() {
    return (
        <main className="min-h-screen bg-[#020b1b] text-white px-6 md:px-24 py-10">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    About Get Me a Coffee
                </h1>

                <p className="text-lg leading-8 mb-8">
                    Get Me a Coffee is a crowdfunding platform designed for
                    creators to fund their projects with the support of their
                    fans. It`s a space where your fans can directly contribute
                    to your creative endeavors by buying you a coffee. Unlock
                    the potential of your fanbase and bring your projects to
                    life.
                </p>

                {/* How It Works */}
                <h2 className="text-2xl font-semibold mb-6">How It Works</h2>

                <div className="grid md:grid-cols-2 gap-10 mb-8">
                    <div className="flex items-center gap-6">
                        <div className="text-6xl">👥</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Fans Want to Collaborate
                            </h3>
                            <p>
                                Your fans are enthusiastic about collaborating
                                with you on your projects.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-6xl">🪙</div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Support Through Coffee
                            </h3>
                            <p>
                                Receive support from your fans in the form of
                                coffee purchases, directly contributing to your
                                project funding.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits */}
                <section className="space-y-7">
                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Benefits for Creators
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>Direct financial support from your fanbase</li>
                            <li>
                                Engage with your fans on a more personal level
                            </li>
                            <li>
                                Access to a platform tailored for creative
                                projects
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Benefits for Fans
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Directly contribute to the success of your
                                favorite creators
                            </li>
                            <li>
                                Exclusive rewards and perks for supporting
                                creators
                            </li>
                            <li>
                                Be part of the creative process and connect with
                                creators
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Benefits of Collaboration
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Unlock new opportunities through collaboration
                                with fellow creators
                            </li>
                            <li>
                                Expand your network and reach a wider audience
                            </li>
                            <li>
                                Combine skills and resources to create
                                innovative projects
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Community Engagement
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Interact with a supportive community of
                                like-minded individuals
                            </li>
                            <li>
                                Receive valuable feedback and encouragement from
                                peers
                            </li>
                            <li>
                                Participate in discussions and events centered
                                around your interests
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Access to Resources
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Gain access to resources such as tutorials,
                                templates, and tools
                            </li>
                            <li>
                                Receive guidance and mentorship from experienced
                                creators
                            </li>
                            <li>
                                Stay updated on industry trends and best
                                practices
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Recognition and Exposure
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Showcase your work to a global audience and gain
                                recognition
                            </li>
                            <li>
                                Feature in promotional materials and campaigns
                            </li>
                            <li>
                                Build your portfolio and increase your
                                credibility as a creator
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">
                            Supportive Community
                        </h2>
                        <ul className="list-disc ml-6 space-y-2">
                            <li>
                                Join a community that values creativity,
                                diversity, and inclusivity
                            </li>
                            <li>
                                Find encouragement and inspiration from fellow
                                members
                            </li>
                            <li>
                                Collaborate on projects and share resources for
                                mutual growth
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
}
