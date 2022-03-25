import DeleteModal from "../../components/delete-modal/deleteModal.component";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Tr, Td } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";

const AdminOverview = ({admin,password}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const {deleteAdmin} = useAuth();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const handleDeleteAdmin = () => {
    deleteAdmin(admin?._id);
    toggleDeleteModal();
  }

  return (
    <Tr color="#cacaca">
      <Td>1</Td>
      <Td>{admin?.name || ''}</Td>
      <Td>{admin?.email || ''}</Td>
      <Td>
        <input
          value={password||'00000000'}
          type={showPassword ? "text" : "password"}
          disabled
          style={{
            backgroundColor: "transparent",
            letterSpacing: "5px",
            width: "150px",
          }}
        />{" "}
      </Td>
      <Td>
        <Icon
          icon={showPassword ? "bxs:show" : "bxs:hide"}
          color="#cacaca"
          fontSize="1.5em"
          onClick={toggleShowPassword}
        />
      </Td>
      <Td>
        <Icon
          icon="ant-design:delete-twotone"
          onClick={toggleDeleteModal}
          color="#cacaca"
          fontSize="1.5em"
        />
      </Td>
      <DeleteModal
        state={showDeleteModal}
        toggleModal={toggleDeleteModal}
        onNo={toggleDeleteModal}
        onYes={handleDeleteAdmin}
      />
    </Tr>
  );
};

export default AdminOverview;
