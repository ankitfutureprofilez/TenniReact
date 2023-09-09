import React from "react";

function Player() {
    return (
        <>
            <div className="player-top">
                <div className="container">
                    <div className="player-app-dec">
                        <h2>Your Perks as a Tennis Khelo Player: </h2>
                        <h1>More Fun, Less Hassle</h1>
                        <p>At Tennis Khelo, players are in for a treat! From hassle-free match scheduling to exclusive rewards, we've got your back. Dive into the game and experience tennis like never before.</p>
                    </div>
                </div>
            </div>
            <div className="app-feature-player">
                <div className="spreater"></div>
                <div className="container">
                    <h2>App Features for players</h2>
                    <p>Explore the Tennis Khelo App's Exciting Features That Transform Your Game</p>
                    <ul>
                        <li>
                            <img src="\image\challenge.png" alt="challenge" />
                        </li>
                        <li>
                            <img src="\image\seamless.png" alt="seamless" />
                        </li>
                        <li>
                            <img src="\image\book.png" alt="book" />
                        </li>
                        <li>
                            <img src="\image\league.png" alt="league" />
                        </li>
                        <li>
                            <img src="\image\leaderboard.png" alt="leaderboard" />
                        </li>
                        <li>
                            <img src="\image\hub.png" alt="hub" />
                        </li>
                    </ul>
                    <div className="">
                        <div className="">
                            <img src="\image\academy3.png" alt='player ' />
                            <img src="\image\academy1.png" alt='player' />
                        </div>
                        <div className="">
                            <h2>
                                Player  Dashboard
                            </h2>
                            <p>
                                Welcome to your tennis hub! The dashboard offers a quick glimpse into your tennis journey with easy access to key features:
                            </p>
                            <div className="">
                                <ul>
                                    <li>
                                        <img src="\image\dots.png" alt="" />
                                        <p>
                                            <span>    My League: </span>
                                            My League: Stay updated on your league progress, scores, and rankings.
                                        </p>
                                    </li>
                                    <li>
                                        <img src="\image\dots.png" alt="" />
                                        <p>
                                            <span>
                                                State League:
                                            </span>
                                            Compete at a broader level by participating in state-level tournaments and leagues.
                                        </p>
                                    </li>
                                    <li>
                                        <img src="\image\dots.png" alt="" />
                                        <p>
                                            <span>
                                                Book a Court:
                                            </span>
                                            Easily reserve tennis courts at your preferred time and location.
                                        </p>
                                    </li>
                                    <li>
                                        <img src="\image\dots.png" alt="" />
                                        <p>
                                            <span>
                                                Your Schedule Match:
                                            </span>
                                            Access your personalized match schedule, including opponents, timings, and venues, all in one place.
                                        </p>
                                    </li>
                                    <li>
                                        <img src="\image\dots.png" alt="" />
                                        <p>
                                            <span>
                                                Upcoming Tournament:
                                            </span>
                                            Prepare for upcoming tournaments by checking schedules, registration details, and exciting prizes.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>

    );

}
export default Player;