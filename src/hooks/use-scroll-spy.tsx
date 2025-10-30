import * as React from "react";

/**
 * Tracks the scroll position to determine which section is currently visible in the viewport.
 * @param sectionIds An array of element IDs corresponding to the main sections.
 * @param offset The distance from the top of the viewport (in pixels) used as the active line. 
 * (Defaults to 64px, the height of the fixed Navbar).
 * @returns The ID of the currently active section.
 */
const useScrollSpy = (sectionIds: string[], offset = 64) => {
  const [activeId, setActiveId] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      let currentActiveId = sectionIds[0];
      
      // Iterate over sections to find the highest one currently crossing the offset line.
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If the section's top edge is within the defined offset from the viewport top
          if (rect.top <= offset && rect.bottom > offset) {
            currentActiveId = id;
            break; 
          }
        }
      }
      
      setActiveId(currentActiveId);
    };

    // Attach listeners
    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
