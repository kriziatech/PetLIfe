import { Star, Quote } from "lucide-react";

export default function Reviews() {
    const reviews = [
        {
            name: "Rahul Sharma",
            rating: 5,
            text: "Best pet clinic in South Delhi. My dog was suffering from severe infection and they treated him so well. Very affordable and professional.",
            date: "2 months ago"
        },
        {
            name: "Priya Singh",
            rating: 4,
            text: "Very caring vets. They handled my rabbit with extra care. Hard to find vets who know about small pets around here.",
            date: "1 month ago"
        },
        {
            name: "Amit Kumar",
            rating: 5,
            text: "The doctor is very patient and explains everything clearly. My cat recovered from Parvo within a week thanks to their dedicated care.",
            date: "3 weeks ago"
        },
        {
            name: "Sonia Verma",
            rating: 5,
            text: "Clean facility and friendly staff. They truly care about animals. Highly recommended for vaccinations and routine checkups.",
            date: "5 months ago"
        },
        {
            name: "Vikram Malhotra",
            rating: 4,
            text: "Good experience for my dog's surgery. They were very transparent about the costs and the recovery process.",
            date: "4 months ago"
        }
    ];

    return (
        <div className="reviews-page">
            <section className="page-header py-20 bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-3xl mb-4 text-white">Pet Parent Reviews</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        See what our community says about their experience with Pet Life Clinic.
                    </p>
                </div>
            </section>

            <section className="reviews-grid section">
                <div className="container">
                    <div className="text-center mb-12 flex flex-col items-center">
                        <div className="flex text-accent gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} fill="currentColor" size={24} />)}
                        </div>
                        <h2 className="text-2xl font-bold">3.9/5 Rating</h2>
                        <p className="text-muted">Based on 62+ Google Reviews</p>
                        <a
                            href="https://www.google.com/search?q=Pet+Life+Multi+Speciality+Clinic+reviews"
                            target="_blank"
                            className="text-primary font-bold mt-4 underline"
                        >
                            Write a Review
                        </a>
                    </div>

                    <div className="grid grid-3">
                        {reviews.map((review, i) => (
                            <div key={i} className="card relative p-8">
                                <Quote className="absolute top-4 right-4 text-surface" size={40} />
                                <div className="flex text-accent gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <Star
                                            key={s}
                                            size={14}
                                            fill={s <= review.rating ? "currentColor" : "none"}
                                            className={s <= review.rating ? "" : "text-muted"}
                                        />
                                    ))}
                                </div>
                                <p className="text-muted mb-6 italic">&quot;{review.text}&quot;</p>
                                <div className="reviewer-info">
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-xs text-muted">{review.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="social-proof section bg-surface">
                <div className="container text-center">
                    <h2 className="text-2xl mb-8">Trusted by 500+ Pet Parents</h2>
                    <div className="flex justify-center gap-12 flex-wrap opacity-60 grayscale">
                        {/* Mock logos or icons */}
                        <span className="font-bold text-xl">Delhi Pet Assoc.</span>
                        <span className="font-bold text-xl">Local Vet Care</span>
                        <span className="font-bold text-xl">Pet Lovers Delhi</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
