import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCategory } from '../../redux/slices/categorySlice'; // Import removeCategory action
import { Modal, Button, Table } from 'react-bootstrap'; // Assuming you're using react-bootstrap
import { useNavigate } from 'react-router-dom';

const CategoryTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Token logic

  // Fetch categories from Redux store
  const { categories } = useSelector((state) => state.categories);

  // State for modal visibility and selected category for deletion
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  // Open modal for category deletion
  const handleShowDeleteModal = (categoryId) => {
    setCategoryToDelete(categoryId);
    setShowDeleteModal(true);
  };

  // Close delete modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setCategoryToDelete(null);
  };

  // Handle the actual category deletion process
  const handleDeleteCategory = () => {
    if (categoryToDelete) {
      dispatch(removeCategory({ categoryId: categoryToDelete, token }))
        .unwrap()
        .then(() => {
          alert('Category deleted successfully');
          handleCloseDeleteModal(); // Close modal after successful deletion
        })
        .catch((error) => {
          alert('Failed to delete category');
          console.error('Error:', error);
        });
    }
  };

  // Navigate to the update page for a selected category
  const handleUpdate = (categoryId) => {
    navigate(`/category-update/${categoryId}`);
  };

  return (
    <div>
      <h3>Categories List</h3>

      {/* Table for displaying categories */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleUpdate(category.id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleShowDeleteModal(category.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CategoryTable;
