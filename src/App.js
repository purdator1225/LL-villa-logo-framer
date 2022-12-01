import "./styles.css";
import { motion } from "framer-motion";

const transition = { duration: 4, ease: "easeInOut" };

// , yoyo: Infinity
const outerStroke = "8";

export default function App() {
  return (
    <div className="App">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 600 600"
      >
        <g id="XMLID_143_">
          <g id="XMLID_129_">
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition}
              fill="white"
              strokeWidth={outerStroke}
              stroke="rgba(0, 0, 0, 1)"
              // strokeLinecap="round"
              id="XMLID_131_"
              d="M263.7,247.3c-0.8-11.7-4.8-45.4-26.3-68.1c-26.4-27.9-55.7-25.5-55.7-25.5
			s-33.2,2.2-33.2,33.1c0,8.3,2.7,16.4,7.1,23.4c11.7,18.4,44.3,52.5,128,50.9h37.5"
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              ransition={transition}
              fill="white"
              strokeWidth={outerStroke}
              stroke="rgba(0, 0, 0, 1)"
              // strokeLinecap="round"
              transition={transition}
              id="XMLID_130_"
              d="M250,340.2c-59.2,6.6-84.4,33.8-94.4,49.5c-4.5,7-7.1,15.1-7.1,23.4
			c-0.1,31,33.2,33.1,33.2,33.1s29.4,2.4,55.7-25.5s26.4-72.2,26.4-72.2v-26.7v-42.3v-3.7"
            />
          </g>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            ransition={transition}
            fill="white"
            strokeWidth={outerStroke}
            stroke="rgba(0, 0, 0, 1)"
            // strokeLinecap="round"
            transition={transition}
            id="XMLID_128_"
            d="M263.9,319.3"
          />
          <g id="XMLID_123_">
            {/* center */}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              fill="black"
              strokeWidth={outerStroke}
              stroke="rgba(0, 0, 0, 1)"
              // strokeLinecap="round"
              transition={{ delay: 4.5, duration: 1 }}
              id="XMLID_127_"
              d="M327.6,301.3l-14-15.7l-14-15.7l-14,15.7l-14,15.7h0c0,0.2,0,0.3,0,0.5
			c0,15.5,12.6,28.1,28.1,28.1c15.5,0,28.1-12.6,28.1-28.1C327.6,301.7,327.5,301.5,327.6,301.3L327.6,301.3z"
            />
            <g id="XMLID_124_">
              <motion.path
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                fill="rgba(255, 255, 255,0.99)"
                // strokeWidth=""
                // stroke="rgba(0, 0, 0, 1)"
                // strokeLinecap="round"
                transition={{ delay: 4.5, duration: 1 }}
                id="XMLID_10_"
                d="M324.2,302c-17.1,4.2-20.6,7.6-24.7,24.9c-4.2-17.3-7.6-20.7-24.7-24.9
				c17.1-4.2,20.6-7.6,24.7-24.9C303.7,294.3,307.1,297.8,324.2,302z"
              />
              {/* center end */}
            </g>
          </g>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            ransition={transition}
            fill="white"
            strokeWidth={outerStroke}
            stroke="rgba(0, 0, 0, 1)"
            // strokeLinecap="round"
            transition={transition}
            id="XMLID_121_"
            d="M336.3,352.7c0.8,11.7,4.8,45.4,26.3,68.1c26.4,27.9,55.7,25.5,55.7,25.5s33.2-2.2,33.2-33.1
		c0-8.3-2.7-16.4-7.1-23.4c-11.7-18.4-44.3-52.5-128-50.9h-37.5"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            ransition={transition}
            fill="white"
            strokeWidth={outerStroke}
            stroke="rgba(0, 0, 0, 1)"
            // strokeLinecap="round"
            transition={transition}
            id="XMLID_120_"
            d="M349,259.8c59.2-6.6,84.4-33.8,94.4-49.5c4.5-7,7.1-15.1,7.1-23.4c0.1-31-33.2-33.1-33.2-33.1
		s-29.4-2.4-55.7,25.5s-26.4,72.2-26.4,72.2v26.7v42.3v3.7"
          />
        </g>
      </svg>
    </div>
  );
}
