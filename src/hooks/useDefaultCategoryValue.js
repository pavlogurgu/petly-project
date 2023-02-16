import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useDefaultCategoryValue = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      setSelectedCategory('sell');
      return;
    }
    setSelectedCategory(category);
  }, [category]);

  return [selectedCategory, setSelectedCategory];
};

export default useDefaultCategoryValue;