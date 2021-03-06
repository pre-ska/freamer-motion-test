import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      exit="exit"
      animate="show"
      style={{ background: "#fff" }}>
      contact us!!!!!!!!!!!!!
    </motion.div>
  );
};

export default ContactUs;
