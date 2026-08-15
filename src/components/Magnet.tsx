import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const magnetRef = useRef<HTMLDivElement>(null);

  // 1. Mouse Magnetic Tracking (Desktop)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const rect = magnetRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const radius = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < radius) {
        setIsHovered(true);
        setPosition({
          x: distanceX / strength,
          y: distanceY / strength,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength]);

  // 2. Gyroscope / Device Orientation Tilt Tracking (Mobile & Tablets)
  useEffect(() => {
    let initialBeta: number | null = null;

    const handleDeviceOrientation = (e: DeviceOrientationEvent) => {
      // gamma: left-to-right tilt (-90 to 90)
      // beta: front-to-back tilt (-180 to 180)
      if (e.gamma === null || e.beta === null) return;

      if (initialBeta === null) {
        initialBeta = e.beta;
      }

      // Calculate relative tilt
      const deltaX = e.gamma * 1.1; // scale tilt factor
      const deltaY = (e.beta - initialBeta) * 1.1;

      // Clamp max displacement so avatar stays within bounds
      const maxOffset = 35;
      const clampedX = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
      const clampedY = Math.max(-maxOffset, Math.min(maxOffset, deltaY));

      setIsHovered(true);
      setPosition({
        x: clampedX,
        y: clampedY,
      });
    };

    const enableOrientation = async () => {
      if (typeof window !== 'undefined' && 'DeviceOrientationEvent' in window) {
        // iOS 13+ permission handling if required
        const DeviceOrientationEventTyped = DeviceOrientationEvent as any;
        if (typeof DeviceOrientationEventTyped.requestPermission === 'function') {
          try {
            const permission = await DeviceOrientationEventTyped.requestPermission();
            if (permission === 'granted') {
              window.addEventListener('deviceorientation', handleDeviceOrientation, true);
            }
          } catch (err) {
            console.log('DeviceOrientation permission error:', err);
          }
        } else {
          window.addEventListener('deviceorientation', handleDeviceOrientation, true);
        }
      }
    };

    enableOrientation();

    // Also trigger on first user touch interaction for mobile browsers requiring user gesture
    const handleTouchStart = () => {
      enableOrientation();
    };

    window.addEventListener('touchstart', handleTouchStart, { once: true });

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation, true);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return (
    <div
      ref={magnetRef}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
