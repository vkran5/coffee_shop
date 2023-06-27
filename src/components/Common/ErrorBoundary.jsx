import { Component } from 'react';
import { TbFaceIdError } from 'react-icons/tb';
import { motion } from 'framer-motion';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='flex h-screen w-screen items-center justify-center'>
          <div className='flex w-4/5 flex-col justify-center'>
            <motion.div
              className='mx-auto'
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }}
            >
              <p className='mx-auto text-[72px] text-yellow'>
                <TbFaceIdError />
              </p>
            </motion.div>

            <h1 className='mx-auto text-[16px] md:text-[28px] lg:text-[34px]'>
              Oops something wrong happened :({' '}
            </h1>
            <p className='mx-auto text-[12px] md:text-[20px]'>
              Please wait and check later{' '}
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
