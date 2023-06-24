export const messageAnimation = {
  key: 'pop-massage',
  initial: { y: '-100%', opacity: 0 },
  animate: { y: 100, opacity: 1 },
  exit: { y: '-100%', opacity: 0 },
  transition: { duration: 0.5 },
};

export const modalAnimation = {
  key: 'pop-modal',
  initial: { ease: 'linear', opacity: 0 },
  animate: { ease: 'linear', opacity: 1 },
  exit: { ease: 'linear', opacity: 0 },
  transition: { duration: 0.3 },
};
