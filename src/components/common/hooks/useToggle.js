import {useState} from 'react';

const useToggle = () => {
  const [toggle, setTiggle] = useState(false);
  return [toggle, setTiggle];
};

export default useToggle;
