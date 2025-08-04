import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EdittingPage from "./EdittingPage";
import AdminShowcase from "./AdminShowcase";

const Admininfo = ({ adminData ,UpdatedUser ,affterUpdate ,defaultDp ,afterEditing}) => {
  const Navigate = useNavigate();
  const [editMode, setEditmode] = useState(null);

  return (
    <>{editMode ? <EdittingPage defaultDp={defaultDp} adminData = {adminData} UpdatedUser = {UpdatedUser} affterUpdate = {affterUpdate} editMode = {(data)=>setEditmode(null)} /> :
     <AdminShowcase afterEditing={afterEditing} defaultDp={defaultDp} adminData={adminData} editMode = {(data)=>setEditmode(true)} />}</>
  );
};

export default Admininfo;
