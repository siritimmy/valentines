// ============================================================
// EDIT THIS FILE to personalize your Valentine's website!
// Everything on the site is driven by this single config.
// ============================================================

export const config = {
  // --- Hero / Landing ---
  heroTitle: "Happy Valentine's Day, Wenwen!",
  heroSubtitle: "Thanks for always being there for me kubb :DD",

  // --- Countdown ---
  // Set the date & time you'll next see each other (ISO format, local time)
  countdown: {
    targetDate: "2026-04-03T18:00:00",
    label: "See you soonn!",
    expiredMessage: "You're finally here!",
  },

  // --- Timeline / Our Story ---
  // Add as many memories as you want. Put photos in /public/photos/
  timeline: [
    {
      date: "2025-05-20",
      title: "First time sending cute selfies",
      description:
        "Probably not exact date and photo, but I remember opening this pic and felt so happy 🙉",
      photo: "/photos/first_selfie.jpg",
    },
    {
      date: "2025-08-08",
      title: "First Date!",
      description:
        "You were kinda mad at me for being late 555555 and then hai ngon after the sports stuff",
      photo: "/photos/first_date.jpeg",
    },
    {
      date: "2025-08-12",
      title: "First time holding hands",
      description:
        "I was so nian right?",
      photo: "/photos/first_holdhands.jpg",
    },
    {
      date: "2025-08-26",
      title: "First long-distance with cutie",
      description:
        "Mai tong sad na",
      photo: "/photos/first_ldr.JPG",
    },
    {
      date: "2025-12-14",
      title: "Back in-person!",
      description:
        "So excited to see my veggie hater bed lover girlfriend!",
      photo: "/photos/back_ip.jpg",
    },
    {
      date: "2026-01-03",
      title: "First Trip together (Chiangmai)",
      description:
        "Most sleep-deprived I've ever been with you around 55555555",
      photo: "/photos/first_trip.JPG",
    },
    {
      date: "2026-01-03",
      title: "First ice skate date",
      description:
        "I really wanted to put the other pic here 😂",
      photo: "/photos/first_ice.JPG",
    },
    {
      date: "2026-01-08",
      title: "Bye bye for a bit :(",
      description:
        "",
      photo: "/photos/last_day.jpg",
    },

  ],

  // --- Theme (optional color overrides) ---
  theme: {
    primaryColor: "#e63946",
    secondaryColor: "#ff6b81",
    accentColor: "#ffd6e0",
    backgroundColor: "#fff0f3",
    textColor: "#2b2b2b",
  },
};
