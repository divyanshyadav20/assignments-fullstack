import { motion } from "framer-motion";
import Generator from "./components/Generator";

function App() {
  return (
    <main className="relative mx-auto flex max-w-screen-xl flex-col items-center gap-10 px-4 py-10 sm:px-10">
      <div className="fixed top-0 -z-10 h-full w-full bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="fixed top-0 right-0 bottom-auto left-auto z-1 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#f6339a] blur-[80px]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="fixed inset-0 h-full w-full bg-white [background:radial-gradient(160%_160%_at_50%_10%,#fff_40%,#f6339a_100%)]"
        ></motion.div>
      </div>

      <section className="flex flex-col items-center gap-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold"
        >
          Interview Questions Generator
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="text-lg text-gray-600"
        >
          Generate tailored interview questions based on experience level and job description
        </motion.h2>
      </section>

      <section className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <Generator />
        </motion.div>
      </section>
    </main>
  );
}

export default App;
