import { useEffect } from 'react';

const useClickOutsideBox = (ref, closeBox) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeBox();
      }
    }; document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, closeBox]);
}; export default useClickOutsideBox;
