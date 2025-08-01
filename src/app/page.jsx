"use client";

import { Camera, Heart, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

// Temporary UI Components
const Button = ({
  children,
  onClick,
  disabled,
  className,
  variant,
  ...props
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      variant === "outline"
        ? "border-2 bg-transparent hover:bg-opacity-10"
        : "bg-pink-600 hover:bg-pink-700 text-white"
    } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"} ${
      className || ""
    }`}
    {...props}
  >
    {children}
  </button>
);

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg border shadow-sm ${className || ""}`} {...props}>
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 ${className || ""}`} {...props}>
    {children}
  </div>
);

export default function HomePage() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [loveScore, setLoveScore] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [envelopeState, setEnvelopeState] = useState("closed"); // closed, anticipation, sealCracking, flapLifting, letterEmerging, letterUnfolding, fullyOpen, closing
  const [promiseAccepted, setPromiseAccepted] = useState(false);
  const [showCustomizeModal, setShowCustomizeModal] = useState(false);
  const [selectedRingStyle, setSelectedRingStyle] = useState("classic");
  const [customMessage, setCustomMessage] = useState("");

  const loveMessages = [
    "Kamu adalah alasan aku tersenyum setiap hari ❤️",
    "Bersamamu, setiap hari terasa seperti Valentine 💕",
    "Kamu membuat hidupku lebih berwarna 🌈",
    "Terima kasih sudah menjadi yang terbaik untukku 💖",
    "Aku beruntung memilikimu dalam hidupku ✨",
  ];

  const memories = [
    {
      id: 1,
      title: "First Date",
      image: "/firstdate.jpeg",
    },
    {
      id: 2,
      title: "Hari Jadian 22-09-2024",
      image: "/firstflower.jpeg",
    },
    {
      id: 3,
      title: "Belajar Bareng",
      image: "/belajarbareng.jpeg",
    },
    {
      id: 4,
      title: "Photobooth Pertama",
      image: "/firstphoto.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generateNewMessage = () => {
    const newIndex = Math.floor(Math.random() * loveMessages.length);
    setCurrentMessage(newIndex);
  };

  const calculateLove = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 21) + 80; // 80-100%
      setLoveScore(score);
      setIsCalculating(false);
    }, 2000);
  };

  const openEnvelope = () => {
    if (envelopeState !== "closed") return;

    // Stage 1: Anticipation - envelope prepares to open
    setEnvelopeState("anticipation");

    setTimeout(() => {
      // Stage 2: Seal starts cracking with dramatic effect
      setEnvelopeState("sealCracking");
    }, 1000);

    setTimeout(() => {
      // Stage 3: Flap begins lifting with 3D rotation
      setEnvelopeState("flapLifting");
    }, 2200);

    setTimeout(() => {
      // Stage 4: Letter emerges from envelope
      setEnvelopeState("letterEmerging");
    }, 3400);

    setTimeout(() => {
      // Stage 5: Letter unfolds and transforms to modal
      setEnvelopeState("letterUnfolding");
    }, 4200);

    setTimeout(() => {
      // Stage 6: Fully open modal state
      setEnvelopeState("fullyOpen");
      setIsEnvelopeOpen(true);
    }, 5000);
  };

  const closeEnvelope = () => {
    if (envelopeState !== "fullyOpen") return;

    setEnvelopeState("closing");

    setTimeout(() => {
      setEnvelopeState("closed");
      setIsEnvelopeOpen(false);
    }, 2000);
  };

  const getStatusText = () => {
    switch (envelopeState) {
      case "anticipation":
        return "✨ Bersiap membuka keajaiban...";
      case "sealCracking":
        return "💥 Segel mulai retak...";
      case "flapLifting":
        return "📂 Membuka tutup amplop...";
      case "letterEmerging":
        return "📜 Surat cinta muncul...";
      case "letterUnfolding":
        return "💕 Membuka pesan cinta...";
      case "fullyOpen":
        return "💌 Surat terbuka sempurna!";
      default:
        return "💌 Klik untuk membuka surat cinta";
    }
  };

  const acceptPromise = () => {
    setPromiseAccepted(true);
    // Add some celebration effect
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 3000);
  };

  const openCustomizeModal = () => {
    setShowCustomizeModal(true);
  };

  const closeCustomizeModal = () => {
    setShowCustomizeModal(false);
  };

  const ringStyles = [
    { id: "classic", name: "Classic Gold", emoji: "💍" },
    { id: "diamond", name: "Diamond Solitaire", emoji: "💎" },
    { id: "vintage", name: "Vintage Rose", emoji: "🌹" },
    { id: "modern", name: "Modern Platinum", emoji: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 relative overflow-hidden">
      {/* Floating Hearts Animation */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className={`absolute text-pink-500 animate-bounce opacity-70 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                fontSize: `${Math.random() * 20 + 15}px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="p-6 text-center relative z-20">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <Sparkles className="h-8 w-8 text-pink-600 animate-spin" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            National Girlfriend Day
          </h1>
          <Sparkles className="h-8 w-8 text-pink-600 animate-spin" />
        </div>
        <p className="text-pink-700 text-lg md:text-xl">
          August 1st - Hari Spesial untuk Pacarku ✨
        </p>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-20">
        <div className="grid gap-8 md:gap-12">
          {/* Ultra Enhanced Love Envelope Section */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-6">
              Surat Cinta Untukmu 💌
            </h2>
            <div className="flex justify-center">
              {!isEnvelopeOpen ? (
                <div className="relative">
                  <div
                    className={`relative cursor-pointer transition-all duration-700 ${
                      envelopeState === "anticipation"
                        ? "animate-envelope-anticipation"
                        : envelopeState === "sealCracking"
                        ? "animate-envelope-dramatic-shake"
                        : envelopeState === "flapLifting"
                        ? "animate-envelope-lift"
                        : envelopeState === "letterEmerging"
                        ? "animate-envelope-expand"
                        : envelopeState === "letterUnfolding"
                        ? "animate-envelope-transform"
                        : "hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                    }`}
                    onClick={openEnvelope}
                  >
                    {/* Enhanced Envelope Container with 3D perspective */}
                    <div className="relative w-96 h-64 perspective-2000 transform-style-preserve-3d">
                      {/* Envelope Body with enhanced shadows and depth */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 rounded-lg shadow-2xl transition-all duration-1500 ${
                          envelopeState === "anticipation"
                            ? "envelope-glow-anticipation"
                            : envelopeState === "sealCracking"
                            ? "envelope-glow-intense"
                            : envelopeState === "flapLifting" ||
                              envelopeState === "letterEmerging"
                            ? "envelope-glow-magical"
                            : "envelope-glow"
                        }`}
                      >
                        {/* Enhanced decorative borders with animation */}
                        <div
                          className={`absolute inset-3 border-2 border-pink-300/40 rounded-lg transition-all duration-1000 ${
                            envelopeState === "sealCracking"
                              ? "animate-border-pulse"
                              : ""
                          }`}
                        ></div>
                        <div
                          className={`absolute inset-6 border border-pink-300/30 rounded-lg transition-all duration-1000 ${
                            envelopeState === "sealCracking"
                              ? "animate-border-pulse"
                              : ""
                          }`}
                          style={{ animationDelay: "0.2s" }}
                        ></div>

                        {/* Address area with typewriter effect */}
                        <div className="absolute bottom-8 left-8 right-8 text-center">
                          <p
                            className={`text-pink-100 text-sm font-medium transition-all duration-500 ${
                              envelopeState === "anticipation"
                                ? "animate-text-glow"
                                : ""
                            }`}
                          >
                            Untuk: Pacalkuu 💕
                          </p>
                          <p className="text-pink-200 text-xs mt-1">
                            From: Your Loving Boyfriend
                          </p>
                        </div>

                        {/* Magical aura effect */}
                        {(envelopeState === "flapLifting" ||
                          envelopeState === "letterEmerging") && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/20 to-transparent animate-magical-sweep rounded-lg"></div>
                        )}
                      </div>

                      {/* Ultra Enhanced Envelope Flap with realistic 3D */}
                      <div
                        className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 transition-all duration-1800 transform-origin-bottom ${
                          envelopeState === "flapLifting"
                            ? "animate-flap-dramatic-open"
                            : envelopeState === "letterEmerging"
                            ? "animate-flap-fully-open"
                            : envelopeState === "letterUnfolding"
                            ? "animate-flap-fade-away"
                            : ""
                        }`}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Flap inner shadow with depth */}
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-pink-600/40 to-rose-600/40 transition-all duration-1800"
                          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                        ></div>

                        {/* Flap highlight for 3D effect */}
                        <div
                          className="absolute top-0 left-1/4 right-1/4 h-4 bg-gradient-to-r from-transparent via-pink-200/60 to-transparent transition-all duration-1800"
                          style={{
                            clipPath: "polygon(25% 0, 75% 0, 50% 100%)",
                          }}
                        ></div>
                      </div>

                      {/* Ultra Enhanced Wax Seal with dramatic breaking */}
                      <div
                        className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full shadow-xl transition-all duration-1200 ${
                          envelopeState === "sealCracking"
                            ? "animate-seal-dramatic-crack"
                            : envelopeState === "flapLifting"
                            ? "animate-seal-explosive-break"
                            : ""
                        }`}
                      >
                        <div className="absolute inset-2 bg-red-500 rounded-full flex items-center justify-center">
                          <Heart className="h-8 w-8 text-white" />
                        </div>

                        {/* Enhanced wax drips */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-700 rounded-b-full"></div>
                        <div className="absolute -bottom-2 left-1/3 w-2 h-1 bg-red-800 rounded-full"></div>
                        <div className="absolute -bottom-2 right-1/3 w-2 h-1 bg-red-800 rounded-full"></div>

                        {/* Dramatic crack lines with cascading effect */}
                        {envelopeState === "sealCracking" && (
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-2 left-4 w-8 h-0.5 bg-red-900 rotate-45 animate-crack-cascade"></div>
                            <div
                              className="absolute top-6 right-3 w-6 h-0.5 bg-red-900 -rotate-12 animate-crack-cascade"
                              style={{ animationDelay: "0.3s" }}
                            ></div>
                            <div
                              className="absolute bottom-4 left-2 w-7 h-0.5 bg-red-900 rotate-12 animate-crack-cascade"
                              style={{ animationDelay: "0.6s" }}
                            ></div>
                            <div
                              className="absolute top-8 left-6 w-5 h-0.5 bg-red-900 -rotate-45 animate-crack-cascade"
                              style={{ animationDelay: "0.9s" }}
                            ></div>
                          </div>
                        )}

                        {/* Seal explosion particles */}
                        {envelopeState === "flapLifting" && (
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(8)].map((_, i) => (
                              <div
                                key={i}
                                className="absolute w-1 h-1 bg-red-600 rounded-full animate-seal-particle-explosion"
                                style={{
                                  left: `${
                                    50 + Math.cos((i * Math.PI) / 4) * 20
                                  }%`,
                                  top: `${
                                    50 + Math.sin((i * Math.PI) / 4) * 20
                                  }%`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Ultra Enhanced Letter with realistic emergence */}
                      <div
                        className={`absolute inset-x-8 top-12 bottom-8 bg-cream-100 rounded-lg shadow-lg transition-all duration-1500 ${
                          envelopeState === "letterEmerging"
                            ? "animate-letter-dramatic-emerge"
                            : envelopeState === "letterUnfolding"
                            ? "animate-letter-magical-unfold"
                            : envelopeState === "flapLifting"
                            ? "animate-letter-peek-out"
                            : "translate-y-8 opacity-0"
                        }`}
                        style={{
                          background:
                            "linear-gradient(135deg, #fefce8 0%, #ffffff 100%)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        {/* Letter preview content with animated lines */}
                        <div className="p-4 h-full flex flex-col justify-center opacity-60">
                          <div className="text-center">
                            <Heart
                              className={`h-6 w-6 text-pink-500 mx-auto mb-2 ${
                                envelopeState === "letterEmerging"
                                  ? "animate-heart-bloom"
                                  : ""
                              }`}
                            />
                            <div className="space-y-1">
                              <div
                                className={`h-2 bg-pink-200 rounded w-3/4 mx-auto transition-all duration-500 ${
                                  envelopeState === "letterEmerging"
                                    ? "animate-text-line-appear"
                                    : ""
                                }`}
                              ></div>
                              <div
                                className={`h-2 bg-pink-200 rounded w-full mx-auto transition-all duration-500 ${
                                  envelopeState === "letterEmerging"
                                    ? "animate-text-line-appear"
                                    : ""
                                }`}
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className={`h-2 bg-pink-200 rounded w-2/3 mx-auto transition-all duration-500 ${
                                  envelopeState === "letterEmerging"
                                    ? "animate-text-line-appear"
                                    : ""
                                }`}
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Letter glow effect */}
                        {envelopeState === "letterEmerging" && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-200/30 to-transparent animate-letter-glow-sweep rounded-lg"></div>
                        )}
                      </div>

                      {/* Ultra Enhanced Sparkle Effects with physics */}
                      {(envelopeState === "sealCracking" ||
                        envelopeState === "flapLifting" ||
                        envelopeState === "letterEmerging") && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(16)].map((_, i) => (
                            <Sparkles
                              key={i}
                              className="absolute text-yellow-400 animate-sparkle-physics"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.1}s`,
                                fontSize: `${Math.random() * 8 + 10}px`,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Magical particle system */}
                      {envelopeState === "letterUnfolding" && (
                        <div className="absolute inset-0 pointer-events-none">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-2 h-2 bg-pink-400 rounded-full animate-magical-particles"
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Energy waves effect */}
                      {envelopeState === "letterUnfolding" && (
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute inset-0 border-2 border-pink-400/50 rounded-lg animate-energy-wave"></div>
                          <div
                            className="absolute inset-0 border-2 border-pink-400/30 rounded-lg animate-energy-wave"
                            style={{ animationDelay: "0.5s" }}
                          ></div>
                          <div
                            className="absolute inset-0 border-2 border-pink-400/20 rounded-lg animate-energy-wave"
                            style={{ animationDelay: "1s" }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Status Text with animations */}
                  <p
                    className={`mt-6 text-pink-600 font-medium text-lg transition-all duration-500 ${
                      envelopeState !== "closed"
                        ? "animate-text-magical-glow text-pink-700 font-semibold"
                        : ""
                    }`}
                  >
                    {getStatusText()}
                  </p>

                  {/* Progress indicator */}
                  {envelopeState !== "closed" && (
                    <div className="mt-4 w-64 mx-auto">
                      <div className="w-full bg-pink-200 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full transition-all duration-1000 ${
                            envelopeState === "anticipation"
                              ? "w-1/6"
                              : envelopeState === "sealCracking"
                              ? "w-2/6"
                              : envelopeState === "flapLifting"
                              ? "w-3/6"
                              : envelopeState === "letterEmerging"
                              ? "w-4/6"
                              : envelopeState === "letterUnfolding"
                              ? "w-5/6"
                              : "w-full"
                          }`}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Enhanced Opened Envelope Modal */
                <div
                  className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
                    envelopeState === "fullyOpen" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div
                    className={`relative max-w-4xl w-full max-h-[90vh] transition-all duration-1200 ${
                      envelopeState === "fullyOpen"
                        ? "animate-modal-cinematic-appear scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  >
                    {/* Enhanced Opened Envelope Shape */}
                    <div className="relative bg-gradient-to-br from-pink-400 to-rose-500 rounded-t-lg shadow-2xl">
                      {/* Enhanced top flaps with 3D depth */}
                      <div
                        className={`absolute -top-8 left-0 w-1/2 h-16 bg-gradient-to-br from-pink-300 to-pink-400 transform -skew-y-12 origin-bottom-left rounded-tl-lg transition-all duration-1200 shadow-lg ${
                          envelopeState === "fullyOpen"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      ></div>
                      <div
                        className={`absolute -top-8 right-0 w-1/2 h-16 bg-gradient-to-br from-pink-300 to-pink-400 transform skew-y-12 origin-bottom-right rounded-tr-lg transition-all duration-1200 shadow-lg ${
                          envelopeState === "fullyOpen"
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      ></div>

                      {/* Enhanced close button */}
                      <button
                        onClick={closeEnvelope}
                        className={`absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-all duration-300 z-10 hover:scale-110 hover:rotate-90 ${
                          envelopeState === "fullyOpen"
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-75"
                        }`}
                      >
                        <X className="h-6 w-6 text-pink-600" />
                      </button>

                      {/* Enhanced letter content */}
                      <div
                        className={`bg-gradient-to-br from-cream-50 to-white p-8 rounded-lg m-4 shadow-inner max-h-[70vh] overflow-y-auto transition-all duration-1500 ${
                          envelopeState === "fullyOpen"
                            ? "animate-letter-content-reveal opacity-100"
                            : "opacity-0"
                        }`}
                        style={{
                          background:
                            "linear-gradient(135deg, #fefce8 0%, #ffffff 100%)",
                          backgroundImage: `
                               linear-gradient(90deg, rgba(219, 39, 119, 0.05) 1px, transparent 1px),
                               linear-gradient(rgba(219, 39, 119, 0.05) 1px, transparent 1px)
                             `,
                          backgroundSize: "25px 25px",
                        }}
                      >
                        {/* Letter header */}
                        <div className="text-center mb-8">
                          <div className="flex justify-center mb-4">
                            <Heart className="h-12 w-12 text-pink-500 animate-heartbeat" />
                          </div>
                          <h3 className="text-2xl font-bold text-pink-800 mb-2">
                            Surat Cinta Spesial
                          </h3>
                          <p className="text-pink-600 italic">
                            National Girlfriend Day 2025
                          </p>
                        </div>

                        {/* Letter body */}
                        <div className="prose prose-pink max-w-none">
                          <p className="text-pink-800 leading-relaxed mb-4">
                            <span className="text-pink-600 italic font-medium">
                              Untuk pacalku yang tersayang,
                            </span>
                          </p>

                          <p className="text-pink-700 leading-relaxed mb-4">
                            Hari ini, 1 Agustus, adalah hari yang sangat
                            istimewa karena ini adalah National Girlfriend Day.
                            Hari dimana aku bisa mengekspresikan betapa
                            beruntungnya aku memilikimu dalam hidupku.
                          </p>

                          <p className="text-pink-700 leading-relaxed mb-4">
                            Kamu bukan hanya pacar bagiku, tapi kamu adalah
                            sahabat terbaik, partner dalam segala hal, dan
                            alasan aku selalu bersemangat menjalani hari.
                            Senyummu adalah matahari yang menerangi hari hariku,
                            dan tawamu adalah musik terindah yang pernah
                            kudengar.
                          </p>

                          <p className="text-pink-700 leading-relaxed mb-4">
                            Bersamamu, waktu seakan berjalan dengan cara yang
                            berbeda. Hal hal kecil seperti tatapan matamu saat
                            kita bicara, cara kamu tertawa, atau sekadar duduk
                            berdampingan tanpa banyak katam semuanya terasa
                            spesial. Aku ga butuh alasan besar untuk bahagia,
                            karena setiap momen sederhana denganmu sudah cukup
                            untuk mengisi hatiku dengan rasa syukur dan cinta
                            yang gapernah habis.
                          </p>

                          <p className="text-pink-700 leading-relaxed mb-6">
                            Terima kasih sudah menjadi dirimu yang luar biasa.
                            Terima kasih sudah mencintaiku apa adanya. Terima
                            kasih sudah menjadi bagian terpenting dalam hidupku.
                          </p>

                          <div className="text-center">
                            <p className="text-pink-800 font-semibold text-lg mb-4">
                              I love you more than words can express ❤️
                            </p>

                            <div className="flex justify-center space-x-2 mb-4">
                              {[...Array(7)].map((_, i) => (
                                <Heart
                                  key={i}
                                  className="h-5 w-5 text-pink-400 fill-pink-400 animate-pulse"
                                  style={{ animationDelay: `${i * 0.2}s` }}
                                />
                              ))}
                            </div>

                            <p className="text-pink-600 italic">
                              Dengan cinta yang tak terbatas,
                              <br />
                              <span className="font-semibold">
                                Your Loving Boyfriend 💕
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Interactive Features Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Love Message Generator */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Pesan Cinta Random
                </h3>
                <div className="bg-pink-50 p-4 rounded-lg mb-4 min-h-[80px] flex items-center justify-center">
                  <p className="text-pink-700 font-medium text-center animate-fade-in">
                    {loveMessages[currentMessage]}
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <Button
                    onClick={generateNewMessage}
                    className="w-full max-w-xs flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105"
                  >
                    <Heart className="w-4 h-4" />
                    Pesan Baru
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Memory Gallery */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-pink-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Camera className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Galeri Kenangan
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {memories.map((memory, index) => (
                    <div
                      key={memory.id}
                      className="relative group cursor-pointer transform hover:scale-110 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <img
                        src={memory.image || "/placeholder.svg"}
                        alt={memory.title}
                        className="w-full aspect-[4/3] object-cover rounded-lg shadow-md group-hover:shadow-lg"
                      />
                      <div className="absolute inset-0 bg-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {memory.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Interactive Music & Love Calculator Section */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Promise Ring */}
            <Card className="bg-gradient-to-br from-pink-100 to-rose-100 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-pink-200 p-3 rounded-full w-fit mx-auto mb-4">
                  <div className="h-8 w-8 text-pink-600 flex items-center justify-center">
                    💎
                  </div>
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Promise Ring
                </h3>

                {/* Ring Display */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto relative">
                    {/* Ring Base */}
                    <div
                      className={`absolute inset-0 rounded-full shadow-lg transition-all duration-500 ${
                        selectedRingStyle === "classic"
                          ? "bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500"
                          : selectedRingStyle === "diamond"
                          ? "bg-gradient-to-br from-blue-100 via-white to-blue-200"
                          : selectedRingStyle === "vintage"
                          ? "bg-gradient-to-br from-rose-300 via-rose-400 to-rose-500"
                          : "bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500"
                      } ${
                        promiseAccepted ? "animate-ring-glow" : "animate-pulse"
                      }`}
                    >
                      <div
                        className={`absolute inset-2 rounded-full ${
                          selectedRingStyle === "classic"
                            ? "bg-gradient-to-br from-yellow-200 to-yellow-300"
                            : selectedRingStyle === "diamond"
                            ? "bg-gradient-to-br from-blue-50 to-blue-100"
                            : selectedRingStyle === "vintage"
                            ? "bg-gradient-to-br from-rose-200 to-rose-300"
                            : "bg-gradient-to-br from-gray-200 to-gray-300"
                        }`}
                      ></div>
                    </div>

                    {/* Diamond */}
                    <div
                      className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 shadow-lg transition-all duration-500 ${
                        selectedRingStyle === "diamond"
                          ? "bg-gradient-to-br from-blue-200 via-white to-blue-100 animate-sparkle-ring"
                          : selectedRingStyle === "vintage"
                          ? "bg-gradient-to-br from-rose-200 via-pink-100 to-rose-100"
                          : "bg-gradient-to-br from-blue-200 via-white to-blue-100"
                      } ${promiseAccepted ? "animate-sparkle-ring" : ""}`}
                    >
                      <div className="absolute inset-1 bg-gradient-to-br from-transparent via-white to-transparent rotate-45"></div>
                    </div>

                    {/* Ring Band Details */}
                    <div
                      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-4 rounded-full shadow-inner transition-all duration-500 ${
                        selectedRingStyle === "classic"
                          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"
                          : selectedRingStyle === "diamond"
                          ? "bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200"
                          : selectedRingStyle === "vintage"
                          ? "bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400"
                          : "bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400"
                      }`}
                    ></div>

                    {/* Sparkle Effects */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-white rounded-full transition-all duration-500 ${
                          promiseAccepted
                            ? "animate-ring-sparkle"
                            : "animate-ring-sparkle opacity-50"
                        }`}
                        style={{
                          left: `${20 + Math.cos((i * Math.PI) / 3) * 40}%`,
                          top: `${20 + Math.sin((i * Math.PI) / 3) * 40}%`,
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}

                    {/* Acceptance Celebration */}
                    {promiseAccepted && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(8)].map((_, i) => (
                          <Heart
                            key={i}
                            className="absolute text-pink-500 animate-bounce opacity-70"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.2}s`,
                              fontSize: `${Math.random() * 8 + 12}px`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Promise Message */}
                <div className="bg-white/60 p-4 rounded-lg mb-4 min-h-[100px] flex flex-col justify-center">
                  <div className="text-center">
                    {promiseAccepted ? (
                      <div>
                        <p className="text-pink-700 font-medium text-sm mb-2 italic">
                          ✨ Janji Diterima! ✨
                        </p>
                        <p className="text-pink-800 font-semibold text-base leading-relaxed">
                          Terima kasih telah menerima janjiku. Aku gasabar untuk
                          melewati hari hari bersamamu menikmati setiap detik,
                          mencintaimu tanpa jeda, dan menjaga kisah ini tetap
                          hangat seiring waktu. 💕
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-pink-700 font-medium text-sm mb-2 italic">
                          "Cincin ini adalah janji bahwa..."
                        </p>
                        <p className="text-pink-800 font-semibold text-base leading-relaxed">
                          {customMessage ||
                            "Aku akan selalu mencintaimu, mendukungmu, dan berjuang bersamamu dalam setiap langkah hidup kita. Kamu adalah masa depanku. 💕"}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Ring Actions */}
                <div className="space-y-3">
                  {!promiseAccepted ? (
                    <>
                      <Button
                        onClick={acceptPromise}
                        className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white transform hover:scale-105 transition-all"
                      >
                        <span className="mr-2">💍</span>
                        Accept Promise
                      </Button>
                      <Button
                        onClick={openCustomizeModal}
                        variant="outline"
                        className="w-full border-pink-300 text-pink-700 hover:bg-pink-50 transform hover:scale-105 transition-all bg-transparent"
                      >
                        <span className="mr-2">✨</span>
                        Customize Ring
                      </Button>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-center py-2">
                        <span className="text-2xl">💕</span>
                        <p className="text-pink-700 font-medium text-sm mt-1">
                          Promise Accepted!
                        </p>
                      </div>
                      <Button
                        onClick={openCustomizeModal}
                        variant="outline"
                        className="w-full border-pink-300 text-pink-700 hover:bg-pink-50 transform hover:scale-105 transition-all bg-transparent"
                      >
                        <span className="mr-2">✨</span>
                        View Ring Details
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Customize Ring Modal */}
            {showCustomizeModal && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl animate-modal-cinematic-appear">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-pink-800">
                        Customize Your Ring
                      </h3>
                      <button
                        onClick={closeCustomizeModal}
                        className="bg-pink-100 rounded-full p-2 hover:bg-pink-200 transition-all"
                      >
                        <X className="h-4 w-4 text-pink-600" />
                      </button>
                    </div>

                    {/* Ring Style Selection */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-pink-700 mb-3">
                        Ring Style
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {ringStyles.map((style) => (
                          <button
                            key={style.id}
                            onClick={() => setSelectedRingStyle(style.id)}
                            className={`p-3 rounded-lg border-2 transition-all text-center ${
                              selectedRingStyle === style.id
                                ? "border-pink-500 bg-pink-50"
                                : "border-pink-200 hover:border-pink-300"
                            }`}
                          >
                            <div className="text-2xl mb-1">{style.emoji}</div>
                            <div className="text-xs font-medium text-pink-700">
                              {style.name}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Custom Message */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-pink-700 mb-3">
                        Custom Promise Message
                      </h4>
                      <textarea
                        value={customMessage}
                        onChange={(e) => setCustomMessage(e.target.value)}
                        placeholder="Write your personal promise message..."
                        className="w-full p-3 border border-pink-200 rounded-lg resize-none h-20 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                      />
                    </div>

                    {/* Save Button */}
                    <Button
                      onClick={closeCustomizeModal}
                      className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                    >
                      Save Changes
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Love Compatibility Calculator - Enhanced */}
            <Card className="bg-gradient-to-br from-rose-100 to-pink-100 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-rose-200 p-3 rounded-full w-fit mx-auto mb-4">
                  <div
                    className={`h-8 w-8 text-rose-600 flex items-center justify-center ${
                      isCalculating ? "animate-spin" : "animate-pulse"
                    }`}
                  >
                    🧮
                  </div>
                </div>
                <h3 className="text-xl font-bold text-pink-800 mb-4">
                  Love Calculator ✨
                </h3>
                <div className="bg-white/60 p-4 rounded-lg mb-4 min-h-[100px] flex flex-col justify-center relative overflow-hidden">
                  {/* Sparkle effects during calculation */}
                  {isCalculating && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <Sparkles
                          key={i}
                          className="absolute text-pink-400 animate-sparkle-physics"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`,
                            fontSize: `${Math.random() * 8 + 12}px`,
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {loveScore === 0 ? (
                    <div>
                      <div className="text-4xl mb-2">💕</div>
                      <p className="text-pink-600 text-sm font-medium">
                        Hitung tingkat kompatibilitas cinta kalian!
                      </p>
                    </div>
                  ) : isCalculating ? (
                    <div>
                      <div className="text-4xl mb-2 animate-spin">💖</div>
                      <p className="text-pink-600 text-sm animate-pulse">
                        Menghitung kecocokan magis...
                      </p>
                      <div className="mt-2 w-full bg-pink-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-500 to-rose-500 h-2 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="animate-fade-in">
                      <div className="text-5xl font-bold text-pink-700 mb-2 animate-heartbeat">
                        {loveScore}%
                      </div>
                      <p className="text-pink-600 text-sm font-medium">
                        {loveScore >= 95
                          ? "Perfect Match! 💕✨"
                          : loveScore >= 90
                          ? "Soulmates! ❤️🔥"
                          : loveScore >= 85
                          ? "Amazing Love! 💖🌟"
                          : "Great Couple! 💗💫"}
                      </p>
                      {/* Celebration hearts */}
                      {loveScore >= 90 && (
                        <div className="flex justify-center mt-2 space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Heart
                              key={i}
                              className="h-3 w-3 text-pink-400 fill-pink-400 animate-bounce"
                              style={{ animationDelay: `${i * 0.1}s` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <Button
                  onClick={calculateLove}
                  disabled={isCalculating}
                  className="bg-rose-600 hover:bg-rose-700 text-white transform hover:scale-105 transition-all disabled:opacity-50 w-full"
                >
                  <span className="mr-2">🧮</span>
                  {isCalculating
                    ? "Calculating..."
                    : loveScore === 0
                    ? "Hitung Love Score"
                    : "Hitung Lagi"}
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Final Message */}
          <section className="text-center py-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
                Happy National Girlfriend Day! 💕
              </h2>
              <p className="text-pink-700 text-lg leading-relaxed">
                Terima kasih sudah menjadi bagian terpenting dalam hidupku.
                Setiap hari bersamamu adalah hadiah yang tak ternilai. Aku
                mencintaimu lebih dari kata-kata yang bisa kuungkapkan.
              </p>
              <div className="flex justify-center mt-6 space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Heart
                    key={i}
                    className="h-6 w-6 text-pink-500 fill-pink-500 animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Elements */}
      <div className="fixed bottom-10 right-10 animate-bounce">
        <div className="bg-pink-500 rounded-full p-3 shadow-lg">
          <Heart className="h-6 w-6 text-white fill-white" />
        </div>
      </div>
    </div>
  );
}
