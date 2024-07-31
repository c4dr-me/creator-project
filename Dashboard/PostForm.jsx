import React, { useState } from 'react';

const PostForm = ({ handlePostFormSubmit, setShowPostForm }) => {
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    experience: '',
    isPaid: false,
    charge: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!newPost.title.trim()) {
      errors.title = 'Title is required';
    }
    if (!newPost.content.trim()) {
      errors.content = 'Content is required';
    }
    if (newPost.isPaid && !newPost.charge) {
      errors.charge = 'Charge is required for paid posts';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handlePostFormSubmit(e, newPost);
    }
  };

  const handlePaymentChange = (e) => {
    const isPaid = e.target.value === 'paid';
    setNewPost({ ...newPost, isPaid, charge: isPaid ? newPost.charge : '' });
  };

  const handleChargeChange = (e) => {
    setNewPost({ ...newPost, charge: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h3>Create New Post</h3>
      <label>Role</label>
      <input
        type="text"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      {errors.title && <p className="error">{errors.title}</p>}
      <label>Content</label>
      <textarea
        className="post-desc"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
      />
      {errors.content && <p className="error">{errors.content}</p>}
      <label>Skills</label>
      <input
        type="text"
        value={newPost.experience}
        onChange={(e) => setNewPost({ ...newPost, experience: e.target.value })}
      />
      <div>
        <label>
          <input
            type="radio"
            name="paymentType"
            value="unpaid"
            checked={!newPost.isPaid}
            onChange={handlePaymentChange}
          /> Unpaid
        </label>
        <label>
          <input
            type="radio"
            name="paymentType"
            value="paid"
            checked={newPost.isPaid}
            onChange={handlePaymentChange}
          /> Paid
        </label>
      </div>
      {newPost.isPaid && (
        <div>
          <label>Charge</label>
          <input
            type="number"
            value={newPost.charge}
            onChange={handleChargeChange}
          />
          {errors.charge && <p className="error">{errors.charge}</p>}
        </div>
      )}
      <button type="submit" className="btn">Create Post</button>
      <button type="button" className="btn" onClick={() => setShowPostForm(false)}>Cancel</button>
    </form>
  );
};

export default PostForm;
