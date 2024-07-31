import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;



const PostContainer = styled.div`
  background: rgba(182, 185, 230, 0.11);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.1 );
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 32px;
  padding: 32px;
  color: #ddd;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  flex: 1;
  min-height: 30vh;
  box-sizing: border-box;
  text-align: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
  }

  .edit-input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    font-size: 16px;
    background: none;
    border-radius: 32px;
    color: #fff;
  }

  textarea {
    margin-top: 10px;
  }

  .edit-checkbox-label {
    font-size: 2rem;
  }

  .edit-checkbox {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .cost {
    font-size: 2.25em;
    font-weight: 600;
    color: #0e76a8;
  }

  .user-post-ctn-2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 2rem;
      font-weight: 800;
    }

    p {
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: right;
  button {
      border: none;
      background: none;
      color: #fff;
      cursor: pointer;
      transition: color 0.3s;
      margin-top: 0.5rem;

      &:hover {
        color: #0e76a8;
        text-decoration: underline;
      }
`;

const UserPostContainer = styled.div`
  text-align: center;
  
  .user-card-photo {
    width: 25%;
    margin: auto;
    display: block;
    height: auto;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #0e76a8;
  }
`;

const PostItem = ({ post, isEditing, onEditClick, onDeleteClick, onSaveClick, onCancel, editedPost, onChange }) => {
  const imageUrl = post.user && post.user.photo
    ? `${import.meta.env.VITE_BACKEND_URL}/${post.user.photo}`
    : './default.png';

  return (
    <PostContainer>
      <div className="user-post-ctn-1">
        <UserPostContainer>
           <img
            src={imageUrl}
            alt="Profile"
            className="user-card-photo"
            onError={(e) => {
              e.target.src = './default.png'; // Fallback to default image
            }}
          />
          
        </UserPostContainer>
      </div>
      <div className="user-post-ctn-2">
        {isEditing ? (
          <>
            <input
              type="text"
              name="title"
              value={editedPost.title}
              onChange={onChange}
              className="edit-input"
            />
            <textarea
              name="content"
              value={editedPost.content}
              onChange={onChange}
              className="edit-input"
            />
            <input
              type="text"
              name="experience"
              value={editedPost.experience}
              onChange={onChange}
              className="edit-input"
            />
            <label className="edit-checkbox-label">
              Paid
              <input
                type="checkbox"
                name="isPaid"
                checked={editedPost.isPaid}
                onChange={onChange}
                className="edit-checkbox"
              />
            </label>
            {editedPost.isPaid && (
              <input
                type="text"
                name="charge"
                value={editedPost.charge}
                onChange={onChange}
                className="edit-input"
              />
            )}
          </>
        ) : (
          <>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{post.experience}</p>
            <span className="cost">{post.isPaid ? `Paid @ ${post.charge}` : "No Charges"}</span>
          </>
        )}
      </div>
      <ActionsContainer>
        {isEditing ? (
          <>
            <button onClick={() => onSaveClick(post._id)} title="Save Changes">
              Save
            </button>
            <button onClick={onCancel} title="Cancel Edit">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => onEditClick(post)} title="Edit Post">
              <FaRegEdit size={32} />
            </button>
            <button onClick={() => onDeleteClick(post._id)} title="Delete Post">
              <MdDelete size={32} />
            </button>
          </>
        )}
      </ActionsContainer>
    </PostContainer>
  );
};

export default PostItem;
