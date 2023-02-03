import { AnimatePresence, wrap, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const variants = {
  enter: (back) => {
    return {
      x: back ? -1000 : 1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (back) => {
    return {
      zIndex: 0,
      x: back ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const CaroselWrapper = styled(motion.div)`
  position: relative;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 360px;
  }
  .locate {
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    position: relative;
    .back {
      width: 100%;
      position: absolute;
      padding: 10px;
      p {
        text-align: end;
        cursor: pointer;
        a {
          color: black;
        }
      }
    }
    .Circle {
      cursor: pointer;
      padding: 10px 5px;
      display: flex;
      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: white;
        position: relative;
      }
    }
    .ClickCircle {
      cursor: pointer;
      padding: 10px 5px;
      display: flex;
      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;

        background-color: red;
        position: relative;
      }
    }
  }
`;
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const images = [
  `${process.env.PUBLIC_URL}/assets/images/image_1.png`,
  `${process.env.PUBLIC_URL}/assets/images/image_2.png`,
  `${process.env.PUBLIC_URL}/assets/images/image_3.png`,
];

function CaroselFnc() {
  const [page, setPage] = useState(0);
  const [back, setBack] = useState(false);
  const imageIndex = wrap(0, images.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
    console.log(page);
  };
  return (
    <>
      <AnimatePresence initial={false} custom={back}>
        <CaroselWrapper>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={back}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                setBack(false);
                setPage((prev) =>
                  prev === images.length - 1 ? images.length - 1 : prev + 1
                );
              } else if (swipe > swipeConfidenceThreshold) {
                setBack(true);
                setPage((prev) => (prev === 0 ? 0 : prev - 1));
              }
            }}
          />
          <div className="locate">
            {images.map((n, index) => {
              return (
                // <motion.div key={n} className="Circle">
                <motion.div
                  key={n}
                  className={page === index ? "ClickCircle" : "Circle"}
                >
                  <motion.span
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    onClick={() => {
                      if (index < page) {
                        setBack(true);
                      } else {
                        setBack(false);
                      }
                      setPage(index);
                    }}
                  >
                    {/* <div className="ClickCircle"></div> */}
                  </motion.span>
                </motion.div>
              );
            })}
            <div class="back">
              <p>
                <Link to="/">SKIP</Link>
              </p>
            </div>
          </div>
        </CaroselWrapper>
      </AnimatePresence>
    </>
  );
}

export default CaroselFnc;
