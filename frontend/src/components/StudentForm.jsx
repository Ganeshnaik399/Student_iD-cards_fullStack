import React, { useEffect, useState } from "react";

function StudentForm({ addStudent, editData, updateStudent }) {
  const [form, setForm] = useState({img:"", name: "", rollno: "", class: "" });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      updateStudent(form);
    } else {
      addStudent(form);
    }
    setForm({img:"", name: "", rollno: "", class: "" });

  };
  function addform(){
    document.getElementById("forms").style.display="block";
    document.getElementById("addd").style.display="none";
  }
 function closee(){
  document.getElementById("forms").style.display="none"
  document.getElementById("addd").style.display="block";
 }
  return (
    <div>
      <button id="addd" onClick={addform}>Add Student</button>
      <div id="forms">
        <span onClick={closee}>X</span>
    <form  onSubmit={handleSubmit}>
      <label htmlFor="img">Enter image Ads:-</label>
      <input
        placeholder="img address"
        value={form.img}
        onChange={(e) => setForm({ ...form, img: e.target.value })}
      /><br/>
      <label htmlFor="img">Enter full name   :-  </label>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      /><br/>
      <label htmlFor="img">Enter Roll-num :-       </label>
      <input
        placeholder="Roll No"
        value={form.rollno}
        onChange={(e) => setForm({ ...form, rollno: e.target.value })}
      /><br/>
      <label htmlFor="img">Enter classroom   :  </label>
      <input
        placeholder="Class"
        value={form.class}
        onChange={(e) => setForm({ ...form, class: e.target.value })}
      /><br/>

      <button  className="sub-btn" type="submit">
        {editData ? "Update" : "Add"} Student
      </button>
    </form>
    </div>
    </div>
  );
}

export default StudentForm;