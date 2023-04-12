import React from "react";
import header from "../components/Header";
import footer from "../components/Footer";

function HomePage() {
    return (
        <div>
        <header />
        <h1>  <main>
            <section id="hero">
                <h1>Welcome to Emo Book </h1>
                <p style="width: 600px; padding: 10px; border: 1px solid white; text-align:justify;"> Emo Book is an innovative project that aims to provide readers with a personalized emotional reading experience. It is an emotional based book recommendation application that suggests books based on the reader's mood and emotions.

                    Emo Book utilizes advanced machine learning algorithms to analyze the user's emotional state, taking into account factors such as stress, happiness, sadness, and excitement. Based on the user's input, the application will recommend books that align with
                        their current emotional state,  helping them to find books that they will enjoy and connect with on a deeper level.

                        Emo Book provides a user-friendly interface that is easy to navigate, allowing users to easily browse recommended books and view details such as author information, summaries, and reviews. Additionally, users can create their reading lists and save their favorite books for later.
                            Overall, Emo Book is an exciting project that promises to revolutionize the way readers discover new books. With its advanced emotional-based recommendation system,  it will help readers find books that resonate with them on a deeper emotional level, ultimately leading to a more fulfilling reading experience.</p>
            </section>
        </main>
        </h1>
        <footer />
        </div>
    );
}

export default HomePage;