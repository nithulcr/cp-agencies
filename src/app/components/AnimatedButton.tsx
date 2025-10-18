"use client";
import Link from 'next/link';
import { useRef } from "react";
import clsx from "clsx";

type AnimatedButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export default function AnimatedButton({
  label,
  className = "",
  onClick,
  href,
  type = "button", // Default to "button" if not a link
  disabled,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  // Determine if link is external
  const isExternal = href && /^https?:\/\//i.test(href);

  if (href) {
    return (
      <Link
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        onClick={onClick}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={clsx("button", className)}
        download={href?.endsWith(".pdf") ? true : undefined}
      >
        <div ref={outlineRef} className="button-text flex items-center gap-2">
          <div className="text-anim">
            <span className="first_text">{label}</span>
            <span className="second_text">{label}</span>
          </div>
          <span className="btn-svg">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1625 2.47132L1.19393 12.6461C1.05168 12.7912 0.972933 12.987 0.975014 13.1902C0.977094 13.3935 1.05983 13.5876 1.20502 13.7298C1.35021 13.8721 1.54596 13.9508 1.74921 13.9488C1.95246 13.9467 2.14656 13.8639 2.28881 13.7188L12.2574 3.54401L12.3372 11.4481C12.3393 11.6516 12.4221 11.8459 12.5675 11.9884C12.7129 12.1308 12.9089 12.2096 13.1124 12.2076C13.3159 12.2055 13.5102 12.1226 13.6526 11.9773C13.7951 11.8319 13.8739 11.6359 13.8718 11.4324L13.772 1.67829C13.7711 1.57749 13.7503 1.47785 13.7108 1.38509C13.6714 1.29233 13.614 1.20827 13.542 1.13773C13.47 1.06718 13.3847 1.01153 13.2912 0.973965C13.1976 0.936403 13.0976 0.917664 12.9968 0.918823L3.24271 1.01866C3.03921 1.02075 2.84486 1.10359 2.70244 1.24896C2.56001 1.39433 2.48116 1.59033 2.48325 1.79384C2.48533 1.99735 2.56817 2.19169 2.71354 2.33412C2.85892 2.47655 3.05492 2.55539 3.25842 2.55331L11.1625 2.47132Z" fill="#0F0F0F" />
            </svg>
          </span>
        </div>
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx("button", className)}
    >
      <div ref={outlineRef} className="button-text flex items-center gap-2">
        <div className="text-anim">
          <span className="first_text">{label}</span>
          <span className="second_text">{label}</span>
        </div>
        <span className="btn-svg">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1625 2.47132L1.19393 12.6461C1.05168 12.7912 0.972933 12.987 0.975014 13.1902C0.977094 13.3935 1.05983 13.5876 1.20502 13.7298C1.35021 13.8721 1.54596 13.9508 1.74921 13.9488C1.95246 13.9467 2.14656 13.8639 2.28881 13.7188L12.2574 3.54401L12.3372 11.4481C12.3393 11.6516 12.4221 11.8459 12.5675 11.9884C12.7129 12.1308 12.9089 12.2096 13.1124 12.2076C13.3159 12.2055 13.5102 12.1226 13.6526 11.9773C13.7951 11.8319 13.8739 11.6359 13.8718 11.4324L13.772 1.67829C13.7711 1.57749 13.7503 1.47785 13.7108 1.38509C13.6714 1.29233 13.614 1.20827 13.542 1.13773C13.47 1.06718 13.3847 1.01153 13.2912 0.973965C13.1976 0.936403 13.0976 0.917664 12.9968 0.918823L3.24271 1.01866C3.03921 1.02075 2.84486 1.10359 2.70244 1.24896C2.56001 1.39433 2.48116 1.59033 2.48325 1.79384C2.48533 1.99735 2.56817 2.19169 2.71354 2.33412C2.85892 2.47655 3.05492 2.55539 3.25842 2.55331L11.1625 2.47132Z" fill="#0F0F0F" />
          </svg>
        </span>
      </div>
    </button>
  );
}
