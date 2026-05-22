"use client";
// pannel which shows driting code snippets with syntax highlighted.
import CodeLine from "./CodeLine";
import { snippets, LANES} from "@/app/data/generic/codeData";
import styles from "./codeDriftBackground.module.css";

export default function CodeDriftBackground() {
  return (
    <>
      {snippets.map((tokens, i) => {
        const lane = LANES[i % LANES.length];

        return (
          <div
            key={i}
            className={styles.drift}
            style={{
              top: lane.top,
              animationDuration: `${lane.duration}s`,
              animationDelay: `${lane.delay}s`,
              opacity: 0.18 + (i % 3) * 0.06,
            }}
          >
            <CodeLine tokens={tokens} />
          </div>
        );
      })}
    </>
  );
}