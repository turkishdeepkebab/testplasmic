import React from 'react';
import Head from 'next/head';
import styles from '../styles/WelcomeTurkey.module.css';

export default function WelcomeToTurkey() {
  return (
    <>
      <Head>
        <title>Welcome to Turkey - Discover the Bridge Between Continents</title>
        <meta name="description" content="Discover Turkey - a magical land where East meets West, rich in history, culture, and natural beauty." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Welcome to Turkey</h1>
            <p className={styles.heroSubtitle}>
              Where East Meets West - A Journey Through Time and Culture
            </p>
          </div>
          <div className={styles.heroOverlay}></div>
        </section>

        {/* Introduction */}
        <section className={styles.intro}>
          <div className={styles.content}>
            <h2>Discover the Magic of Turkey</h2>
            <p>
              Turkey is a transcontinental country bridging Europe and Asia, offering
              an incredible blend of ancient history, vibrant culture, stunning landscapes,
              and warm hospitality. From the bustling streets of Istanbul to the fairy
              chimneys of Cappadocia, Turkey promises unforgettable experiences.
            </p>
          </div>
        </section>

        {/* Highlights Grid */}
        <section className={styles.highlights}>
          <div className={styles.content}>
            <h2>What Makes Turkey Special</h2>
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🏛️</div>
                <h3>Rich History</h3>
                <p>
                  Home to ancient civilizations including the Greeks, Romans, Byzantines,
                  and Ottomans. Visit iconic sites like Hagia Sophia, Ephesus, and Troy.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🍽️</div>
                <h3>Delicious Cuisine</h3>
                <p>
                  Savor world-renowned Turkish cuisine - from kebabs and mezes to baklava
                  and Turkish delight. Don't miss authentic Turkish breakfast and tea.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🏖️</div>
                <h3>Stunning Beaches</h3>
                <p>
                  Relax on pristine beaches along the Aegean and Mediterranean coasts.
                  Crystal-clear turquoise waters and golden sands await you.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🎈</div>
                <h3>Hot Air Balloons</h3>
                <p>
                  Experience magical sunrise balloon rides over Cappadocia's unique
                  landscape of fairy chimneys and ancient cave dwellings.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🕌</div>
                <h3>Architectural Wonders</h3>
                <p>
                  Marvel at stunning Ottoman mosques, Byzantine churches, and ancient
                  ruins that tell the story of millennia of civilization.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>🛍️</div>
                <h3>Vibrant Bazaars</h3>
                <p>
                  Explore the Grand Bazaar and Spice Market in Istanbul, filled with
                  carpets, ceramics, jewelry, and exotic spices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Must-Visit Destinations */}
        <section className={styles.destinations}>
          <div className={styles.content}>
            <h2>Must-Visit Destinations</h2>
            <div className={styles.destinationList}>
              <div className={styles.destination}>
                <h3>Istanbul</h3>
                <p>
                  The city that straddles two continents. Visit the Blue Mosque, Topkapi Palace,
                  and cruise the Bosphorus strait.
                </p>
              </div>

              <div className={styles.destination}>
                <h3>Cappadocia</h3>
                <p>
                  A surreal landscape of rock formations, underground cities, and cave hotels.
                  Perfect for hot air balloon rides.
                </p>
              </div>

              <div className={styles.destination}>
                <h3>Pamukkale</h3>
                <p>
                  Natural thermal pools cascading down white travertine terraces, creating a
                  cotton castle effect.
                </p>
              </div>

              <div className={styles.destination}>
                <h3>Antalya</h3>
                <p>
                  The Turkish Riviera with beautiful beaches, ancient ruins, and modern resorts
                  along the Mediterranean coast.
                </p>
              </div>

              <div className={styles.destination}>
                <h3>Ephesus</h3>
                <p>
                  One of the best-preserved ancient cities in the world, featuring the Library
                  of Celsus and the Great Theatre.
                </p>
              </div>

              <div className={styles.destination}>
                <h3>Bodrum</h3>
                <p>
                  A sophisticated resort town with a medieval castle, vibrant nightlife, and
                  pristine beaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section className={styles.funFacts}>
          <div className={styles.content}>
            <h2>Did You Know?</h2>
            <ul className={styles.factsList}>
              <li>🌍 Turkey is the only country that spans two continents</li>
              <li>☕ Turkish coffee fortune telling is a beloved tradition</li>
              <li>🐱 Istanbul is home to thousands of friendly street cats</li>
              <li>📚 The first known human settlement was built in Turkey (Göbekli Tepe)</li>
              <li>🌷 Tulips originally came from Turkey, not the Netherlands</li>
              <li>🎭 Santa Claus (Saint Nicholas) was born in Patara, Turkey</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className={styles.content}>
            <h2>Start Your Turkish Adventure</h2>
            <p>
              Whether you're seeking history, relaxation, adventure, or culinary delights,
              Turkey has something for everyone. Plan your journey today!
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Plan Your Trip</button>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>🇹🇷 Hoş geldiniz - Welcome to Turkey! 🇹🇷</p>
        </footer>
      </main>
    </>
  );
}

