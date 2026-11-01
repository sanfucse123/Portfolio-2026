"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteCopyDefaults, type SiteCopyContent } from "@/types/site-copy";

/** Rounded-square badge that frames the logo photo (viewBox 0 0 200 200), matching /public/sanfar/logo-rounded.png. */
const LOGO_BADGE_PATH =
  "M44 0H156A44 44 0 0 1 200 44V156A44 44 0 0 1 156 200H44A44 44 0 0 1 0 156V44A44 44 0 0 1 44 0Z";

const dotPositions = [
  "10% 16%",
  "21% 38%",
  "36% 22%",
  "62% 28%",
  "74% 14%",
  "84% 40%",
  "15% 72%",
  "32% 84%",
  "54% 76%",
  "69% 88%",
  "88% 68%",
];

import { useJarvisStore } from "@/store/useJarvisStore";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [siteCopy, setSiteCopy] = useState<SiteCopyContent>(siteCopyDefaults);
  const { isModelLoaded } = useJarvisStore();

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const res = await fetch('/api/site-shell', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        if (mounted) setSiteCopy(data.siteCopy || siteCopyDefaults);
      } catch { /* keep defaults */ }
    }
    void load();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    let hideTimer: number;
    let failSafeTimer: number;

    const startHiding = () => {
      hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 500); // Small buffer once ready
    };

    // Only hide if model is loaded AND at least 2.5s has passed for branding
    if (isModelLoaded) {
      const minDisplayTime = 2500;
      const now = Date.now();
      const startTime = (window as any)._preloaderStartTime || now;
      const elapsed = now - startTime;

      if (elapsed >= minDisplayTime) {
        startHiding();
      } else {
        hideTimer = window.setTimeout(startHiding, minDisplayTime - elapsed);
      }
    }

    // Fail-safe: hide after 8s regardless of model state
    failSafeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(failSafeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [isModelLoaded]);

  // Set start time on first mount if not exists
  useEffect(() => {
    if (!(window as any)._preloaderStartTime) {
      (window as any)._preloaderStartTime = Date.now();
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const restoreTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
    }, 500);

    return () => window.clearTimeout(restoreTimer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-120 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.05), transparent 28%),
                radial-gradient(circle at 80% 25%, rgba(0, 0, 0, 0.08), transparent 30%),
                radial-gradient(circle at 50% 78%, rgba(0, 0, 0, 0.06), transparent 36%),
                linear-gradient(145deg, #ffffff 0%, #fdfdfd 42%, #f0f0f0 100%)
              `,
            }}
          />

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.16) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.16) 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
            }}
          />

          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: dotPositions
                .map((position) => `radial-gradient(circle at ${position}, rgba(0,0,0,0.85) 0 1.5px, transparent 2.5px)`)
                .join(", "),
            }}
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),transparent_38%)]" />

          <div className="relative flex h-full items-center justify-center px-6">
            <div className="flex flex-col items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="absolute inset-[-34px] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.1),transparent_62%)] blur-3xl" />
                <motion.svg
                  viewBox="0 0 200 200"
                  className="relative h-28 w-28 md:h-36 md:w-36"
                  fill="none"
                >
                  <defs>
                    <clipPath id="preloader-logo-clip">
                      <path d={LOGO_BADGE_PATH} />
                    </clipPath>
                  </defs>
                  <motion.image
                    href="/sanfar/logo.png"
                    width="200"
                    height="200"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#preloader-logo-clip)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.95, duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.path
                    d={LOGO_BADGE_PATH}
                    stroke="#000000"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0, strokeOpacity: 1 }}
                    animate={{ pathLength: 1, strokeOpacity: 0 }}
                    transition={{
                      pathLength: { duration: 1.45, ease: "easeInOut" },
                      strokeOpacity: { delay: 1.15, duration: 0.32, ease: "easeOut" },
                    }}
                  />
                </motion.svg>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.65 }}
                className="space-y-4 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-[0.6em] text-black/70">
                  {siteCopy.preloaderText}
                </p>
                <div className="flex items-center justify-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <motion.span
                      key={index}
                      className="h-2.5 w-2.5 rounded-full bg-black"
                      animate={{ y: [0, -8, 0], opacity: [0.35, 1, 0.35] }}
                      transition={{
                        duration: 0.9,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.12,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
