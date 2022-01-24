import React, { useState, useEffect } from "react"
import { backToTop } from "../../../style.module.css"

export const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={backToTop}>
          置頂
        </button>
      )}
    </>
  )
}
