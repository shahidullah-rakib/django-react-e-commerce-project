import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createCategory,
  getCategories,
  modifyCategory,
  removeCategory,
} from '../../redux/slices/categorySlice';
import { getProducts } from '../../redux/slices/productSlice';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import { useNavigate } from 'react-router-dom';

const Operators = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token'); // Replace this with your actual token logic
  const navigate = useNavigate(); // Use useNavigate hook

  const [newCategory, setNewCategory] = useState('');
  const [description, setDescription] = useState('');

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories and products from the Redux store
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state) => state.categories);
  const {
    products,
    loading: productsLoading,
    error: productsError,
  } = useSelector((state) => state.products);

  // Fetch data when the component mounts
  useEffect(() => {
    dispatch(getCategories(token));
    dispatch(getProducts(token));
  }, [dispatch, token]);

  // Handle form submission
  const handleAddCategory = (e) => {
    e.preventDefault();

    // Ensure both fields are not empty
    if (newCategory.trim() && description.trim()) {
      // Dispatch the createCategory action with both name and description
      dispatch(
        createCategory({
          categoryData: {
            name: newCategory,
            description: description, // Pass the description
          },
          token,
        })
      )
        .unwrap()
        .then(() => {
          console.log('Category successfully added');
          setNewCategory(''); // Clear name input after success
          setDescription(''); // Clear description input after success
        })
        .catch((error) => {
          console.error('Failed to add category:', error);
          alert('Failed to add category. Please try again.');
        });
    } else {
      alert('Please fill in both fields.');
    }
  };

  //handle the delete
  const handleDeleteCategory = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      dispatch(removeCategory({ categoryId, token }))
        .unwrap()
        .then(() => {
          alert('Category deleted successfully');
        })
        .catch((error) => {
          alert('Failed to delete category');
          console.error(error);
        });
    }
  };

  // Handle category update
  const handleUpdate = (categoryId) => {
    navigate(`/category-update/${categoryId}`);
  };

  return (
    <div>
      <LogoutButton />
      <h2>Operators Dashboard</h2>

      {/* Categories Section */}
      <div>
        <h3>Categories</h3>
        {/* {categoriesLoading && <p>Loading categories...</p>}
        {categoriesError && <p>Error: {categoriesError}</p>} */}
        {!categoriesLoading && categories.length > 0 && (
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                {category.name}
                <br />
                <button
                  className="bg-danger"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-primary"
                  onClick={() => handleUpdate(category.id)} // Navigate to update page with category ID
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <form onSubmit={handleAddCategory}>
          <div>
            <label htmlFor="categoryName">Category Name:</label>
            <input
              type="text"
              id="categoryName"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="categoryDescription">Category Description:</label>
            <textarea
              id="categoryDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Category</button>
        </form>
      </div>

      {/* Products Section */}
      <div>
        <h3>Products</h3>
        {/* {productsLoading && <p>Loading products...</p>}
        {productsError && <p>Error: {productsError}</p>} */}
        {!productsLoading && products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* <ProductTable /> */}
    </div>
  );
};

export default Operators;
