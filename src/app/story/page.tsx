"use client";
import { useEffect, useRef } from "react";

const Story = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = "/storybook-static";
    }
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        ref={iframeRef}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Storybook"
      />
    </div>
  );
};

export default Story;
