import React, { useState} from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Modal from "react-modal";
export interface CreatePostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// Function to post data to Cloudinary

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  
  return (
    
      
    </Modal>
  );
};

export default CreatePostModal;
