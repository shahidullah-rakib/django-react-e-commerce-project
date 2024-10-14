import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { modifyCategory } from '../../redux/slices/categorySlice';

const CategoryUpdateForm = () => {
  const { id } = useParams(); // Get the category id from the URL
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Select the category data from the Redux store
  const category = useSelector((state) =>
    state.categories.categories.find((cat) => cat.id === parseInt(id))
  );

  const [name, setName] = useState(category?.name || '');
  const [description, setDescription] = useState(category?.description || '');

  // Fetch category data if it's not available in the Redux store
  useEffect(() => {
    if (!category) {
      // If needed, trigger a fetch or handle case where category is missing
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = 'YOUR_ACCESS_TOKEN'; // Replace with actual token
    const updatedCategory = { name, description };

    // Dispatch the modifyCategory action to update the category
    dispatch(
      modifyCategory({
        categoryId: id,
        categoryData: updatedCategory,
        token,
      })
    );

    navigate('/'); // Navigate back to the categories list or another route after updating
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Update Category</button>
      <button type="button" onClick={() => navigate('/')}>
        Cancel
      </button>
    </form>
  );
};

export default CategoryUpdateForm;
