import React from "react";

const INITIAL_SCROLL_POSITION = 4;

export default function ScrollStories() {
  const [scrollPosition, setScrollPosition] = React.useState(
    INITIAL_SCROLL_POSITION
  );

  function scrollToRigth() {
    setScrollPosition(scrollPosition + 1);
    document.querySelector(".stories").children[scrollPosition].scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    if (scrollPosition === 10) {
      setScrollPosition(INITIAL_SCROLL_POSITION - 1);
    }

    console.log(scrollPosition);
  }

  return (
    <div class="setinha" onClick={scrollToRigth}>
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  );
}
