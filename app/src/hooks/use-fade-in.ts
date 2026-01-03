"use client";

import { useEffect } from "react";

/**
 * スクロールに応じてフェードインアニメーションを適用するカスタムフック
 * NOTE: globals.cssの.fadeクラスと連携して動作
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   useFadeIn();
 *   return <div className="fade">Content</div>;
 * };
 * ```
 */
export const useFadeIn = () => {
  useEffect(() => {
    const targets = document.getElementsByClassName("fade");

    // NOTE: IntersectionObserverを使用してスクロール位置に応じてアニメーションを発火
    for (let i = targets.length; i--; ) {
      const observer = new IntersectionObserver((entries) => {
        for (let j = entries.length; j--; ) {
          if (entries[j].isIntersecting) {
            entries[j].target.classList.add("active");
            observer.unobserve(entries[j].target);
          }
        }
      });
      observer.observe(targets[i]);
    }
  }, []);
};
