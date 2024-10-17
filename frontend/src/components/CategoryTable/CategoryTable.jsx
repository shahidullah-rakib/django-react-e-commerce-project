import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import DeleteConfirmModal from '../DeleteConfirmModal/DeleteConfirmModal';
import { removeCategory } from '../../redux/slices/categorySlice'; // Ensure this action exists

const CategoryTable = () => {
  const dispatch = useDispatch();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useSelector((state) => state.categories);

  // State to control modal visibility and selected category
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Open delete modal and set the selected category
  const handleOpenDeleteModal = (category) => {
    setSelectedCategory(category); // This sets the whole category object to state
    setShowDeleteModal(true);
  };

  // Close delete modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedCategory(null); // Clear the selected category after closing the modal
  };

  // Handle delete action when confirming from modal
  const handleDeleteCategory = (categoryId) => {
    // Check if categoryId is correctly passed
    console.log('Deleting category with ID:', categoryId);

    dispatch(removeCategory({ categoryId }))
      .unwrap()
      .then(() => {
        alert('Category deleted successfully');
        handleCloseDeleteModal(); // Close modal after deletion
      })
      .catch((error) => {
        alert('Failed to delete category');
        console.error('Error deleting category:', error);
      });
  };

  // Columns for DataTable
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Category Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Category Description',
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: 'Action',
      cell: (row) => (
        <div>
          <button className="btn btn-primary btn-sm me-2">Update</button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleOpenDeleteModal(row)} // Pass the entire category row
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = categories || [];

  return (
    <div>
      {!categoriesLoading && categories && (
        <DataTable
          title="Categories List"
          columns={columns}
          data={data}
          pagination
          highlightOnHover
        />
      )}

      {/* Render the DeleteConfirmModal and pass the necessary props */}
      {selectedCategory && (
        <DeleteConfirmModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
          modalTitle="Confirm Deletion"
          modalBody={`Are you sure you want to delete the category: ${selectedCategory.name}?`}
          primaryButtonLabel="Delete"
          handlePrimaryAction={() => handleDeleteCategory(selectedCategory.id)} // Correctly pass the categoryId here
        />
      )}
    </div>
  );
};

export default CategoryTable;
