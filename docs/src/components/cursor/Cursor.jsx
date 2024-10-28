import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x, y: position.y }} // Keep the cursor centered on mouse
      transition={{ type: "spring", stiffness: 500, damping: 30 }} // Add spring effect
    >
      <div className="fire-effect"></div>
    </motion.div>
  );
};

export default Cursor;
