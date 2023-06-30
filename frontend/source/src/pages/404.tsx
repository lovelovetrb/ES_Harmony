import Header from "@/components/Header/Header";
import { motion } from "framer-motion";

const _404 = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <Header />
            <h1>404</h1>
        </motion.div>
    );
};

export default _404;
